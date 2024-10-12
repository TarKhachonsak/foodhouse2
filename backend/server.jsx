const express = require("express");
const multer = require('multer');
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const decodedName = decodeURIComponent(file.originalname);
        cb(null, Date.now() + '-' + decodedName);
    }
});

const upload = multer({ storage });

//ส่งข้อมูลไป DB recipes
app.post('/api/add_recipe', upload.single('Image'), (req, res) => {
    // const Image = req.file.filename
    const category_id = req.body.category_id;
    const sql = "INSERT INTO recipes (`recipe_name`, `Image`, `description`, `ingredient`, `how_to_cook`, `category_id`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [req.body.recipe_name, req.file.filename, req.body.description, req.body.ingredient, req.body.how_to_cook, category_id]; // ใช้ array สำหรับค่า

    console.log("Body =", req.body);
    console.log("File =", req.file);
    console.log("category_id =", category_id);

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "เพิ่มสูตรอาหารสำเร็จ!" });
    });
});

//ดึงเมนูอาหาร DB recipes
app.get('/api/get_recipes', (req, res) => {
    const sql = "SELECT * FROM recipes";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
});

app.get('/RecipeDetail/:id', (req, res) => {
    const sql = "SELECT * FROM recipes WHERE recipe_id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
});

//EditRecipe
app.put('/EditRecipe/:id', upload.single('Image'), (req, res) => {
    const sql = "UPDATE recipes SET `recipe_name` = ?, `Image` = ?, `description` = ?, `ingredient` = ?, `how_to_cook` = ?, `category_id` = ? WHERE recipe_id = ?"
    const id = req.params.id;
    const imageFile = req.file ? req.file.filename : req.body.existingImage;
    db.query(sql, [
        req.body.recipe_name,
        imageFile,
        req.body.description,
        req.body.ingredient,
        req.body.how_to_cook,
        req.body.category_id, 
        id
    ], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    })
})

//DeleteRecipe
app.delete('/Delete/:id', (req, res) => {
    const recipeId = req.params.id;
    const sql = "DELETE FROM recipes WHERE recipe_id = ?";
    
    db.query(sql, [recipeId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (result.affectedRows > 0) {
        res.json({ message: 'ลบสูตรอาหารสำเร็จ' });
      } else {
        res.status(404).json({ error: 'ไม่พบสูตรอาหารที่ต้องการลบ' });
      }
    });
  });
  

app.get('/api/categories', (req, res) => {
    const sql = "SELECT * FROM categories";
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(data);
    })
})

app.post('/Register', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`, `confirmpassword`) VALUES (?, ?, ?, ?)";
    
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.confirmPassword
    ];
    console.log(values)
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.status(500).json({ message: "Database error" });
        } 
        return res.json({ message: "Registration successful", data });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            // ส่งข้อมูล id ของผู้ใช้กลับไปยัง Front-end
            return res.json({ message: "Success", userId: data[0].id });
        } else {
            return res.json({ message: "Failed" });
        }
    });
});

app.get('/api/get_user_info', (req, res) => {
    const query = 'SELECT * FROM login WHERE `id` = ?';
    db.query(query, [req.query.user_id], (err, result) => {
        if (err) {
            return res.status(500).json({ err: err.message });
        }
        if (result.length > 0) {
            return res.json(result[0]);
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    });
});

app.listen(8081, () => {
    console.log("DB connected")
})