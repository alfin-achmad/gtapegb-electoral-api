import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/user")
export class UserController {
  @Get("/detail/:userID")
  getDetail(){
    return "ok getDetail of user"
  }

  @Get("/")
  getIndex(){
    return "ok index of user"
  }
}
