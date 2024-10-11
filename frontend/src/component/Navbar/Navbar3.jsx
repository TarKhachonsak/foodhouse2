import { NavLink } from 'react-router-dom';

const Navbar3 = () => {
  const links = [
    { name: "สร้างสูตรอาหาร", path: "/Profile" },
    { name: "เมนูของฉัน", path: "/Recipe" },
    { name: "รีวิวจากผู้ใช้งานอื่น", path: "/UserReviews" },
    { name: "บันทึกแล้ว", path: "/Saved" },
  ];

  return (
    <nav className="p-4 space-x-0">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `font-bold py-2 px-4 ${isActive
              ? "text-[#FFCC00] border-b-4 border-[#FFCC00]"
              : "text-gray-400 hover:bg-slate-100" 
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar3;
