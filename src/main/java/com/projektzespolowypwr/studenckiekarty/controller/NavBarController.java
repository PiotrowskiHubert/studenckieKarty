package com.projektzespolowypwr.studenckiekarty.controller;

import com.projektzespolowypwr.studenckiekarty.dto.UserDto;
import com.projektzespolowypwr.studenckiekarty.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/nav/v1")
public class NavBarController {
    private final IUserService userService;


    public NavBarController(IUserService userService) {
        this.userService = userService;
    }

    @GetMapping("/home")
    public String home(){
        return "index";
    }

    @GetMapping("/games")
    public String games(){
        throw new UnsupportedOperationException();
    }

    @GetMapping("/ranking")
    public String ranking(){
        return "ranking";
    }

    @GetMapping("userSearch/{nickname}")
    public String userSearch(@RequestParam String nickname, Model model){
        model.addAttribute("searchedUser", userService.findUserByNickname(nickname));
        throw new UnsupportedOperationException();
    }

    @PostMapping("/signUp")
    public String signUp(@ModelAttribute UserDto userDto){
        userService.add(userDto);
//        model.addAttribute("user", userService.addUser(userDto));
        return "redirect:/";
    }
}
