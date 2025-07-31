import { useState } from "react";
import css from "./SidebarMenu.module.css"

export type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`${css.sidebarBackdrop} ${isOpen ? css.show : ""}`} onClick={onClose}></div>
      <aside className={`${css.sidebar} ${isOpen ? css.open : ""}`}>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <div
                className={css.menuItem}
                onClick={() => (item.children ? toggleSubmenu(i) : onClose())}
              >
                {item.label}
              </div>
              {item.children && openIndex === i && (
                <ul className={css.submenu}>
                  {item.children.map((sub, j) => (
                    <li key={j}>
                      <a href={sub.link || "#"}>{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;