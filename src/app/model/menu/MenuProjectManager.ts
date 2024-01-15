import { Menu } from "./Menu.interface";
import { NavbarProjectManager } from "./navbar";
import { SidebarProjectManager } from "./sidebar";

export class MenuProjectManager implements Menu{
    navbar() {
        return new NavbarProjectManager();
    }
    sidebar() {
        return new SidebarProjectManager();
    }
    
}