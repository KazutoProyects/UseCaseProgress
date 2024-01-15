import { Menu } from "./Menu.interface";
import { NavbarAdmin } from "./navbar";
import { SidebarAdmin } from "./sidebar";

export class MenuAdmin implements Menu{
    navbar() {
        return new NavbarAdmin();
    }
    sidebar() {
        return new SidebarAdmin();
    }
    
}