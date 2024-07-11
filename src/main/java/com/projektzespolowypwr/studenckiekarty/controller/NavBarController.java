package com.projektzespolowypwr.studenckiekarty.controller;

import com.projektzespolowypwr.studenckiekarty.dto.UserDto;
import com.projektzespolowypwr.studenckiekarty.entity.MyUser;
import com.projektzespolowypwr.studenckiekarty.service.IGameService;
import com.projektzespolowypwr.studenckiekarty.service.IUserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/nav/v1")
public class NavBarController {
    private final IUserService userService;
    private final IGameService gameService;

    public NavBarController(IUserService userService, IGameService gameService) {
        this.userService = userService;
        this.gameService = gameService;
    }

    @GetMapping("/home")
    public String home(){
        return "index";
    }

    @GetMapping("/games")
    public String games(Model model){
        model.addAttribute("games", gameService.getAllGames());
        return "games";
    }

    @GetMapping("/myProfile")
    public String myProfile(@AuthenticationPrincipal MyUser user, Model model){
        model.addAttribute("user", userService.findUserByNickname(user.getNickname()));
        return "myProfile";
    }

    @GetMapping("/ranking")
    public String ranking(Model model){
        model.addAttribute("users", userService.getAllUsersFilterByBalance());
        return "ranking";
    }

    @GetMapping("/userSearch")
    public String userSearch(@RequestParam String nickname, Model model){
        model.addAttribute("user", userService.findUserByNickname(nickname));
        return "userProfile";
    }

    @PostMapping("/signUp")
    public String signUp(@ModelAttribute UserDto userDto){
        userService.add(userDto);
//        model.addAttribute("user", userService.addUser(userDto));
        return "redirect:/nav/v1/home";
    }
}
