import {Controller} from "@tsed/di";
import {Get,Post} from "@tsed/schema";

@Controller("/auth")
export class AuthenticationController {
  @Post("/sign-in")
  postSignIn(){
    return "ok postSignIn"
  }

  @Post("/sign-out")
  postSignOut(){
    return "ok postSignOut"
  }

  @Post("/register")
  postRegister(){
    return "ok postRegister"
  }

  @Get("/me")
  getMe(){
    return "ok me"
  }
}
