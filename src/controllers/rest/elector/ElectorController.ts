import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/elector")
export class ElectorController {
  @Get("/detail/:electorID")
  getDetail(){
    return "ok getDetail of elector"
  }

  @Get("/")
  getIndex(){
    return "ok index of elector"
  }
}
