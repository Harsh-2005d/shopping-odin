/*import { NavigationMenu, NavigationMenuList,NavigationMenuItem } from "../ui/navigation-menu";


 function Nav(){

    return(
        <NavigationMenu className=" bg-black w-full ">
            <NavigationMenuList> 
                <NavigationMenuItem>heloo</NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );

}
export default Nav;
*/
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"; // Make sure this path matches your setup
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-screen">
      <NavigationMenu className="bg-black  px-8 py-4 shadow-md block w-full">
        <NavigationMenuList className="flex space-x-8 items-center">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to={"/"}
                className="text-white hover:text-black transition-colors"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to={"/cart"}
                className="text-white hover:text-black transition-colors"
              >
                Cart
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to={"/about"}
                className="text-white hover:text-black transition-colors"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to={"/contact"}
                className="text-white hover:text-black transition-colors"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Nav;
