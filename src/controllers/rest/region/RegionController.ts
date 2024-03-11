import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/region")
export class UserController {
  @Get("/")
  getIndex(){
    return "ok index of region"
  }
}
