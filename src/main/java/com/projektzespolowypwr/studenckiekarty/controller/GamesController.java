package com.projektzespolowypwr.studenckiekarty.controller;

import com.projektzespolowypwr.studenckiekarty.entity.MyUser;
import com.projektzespolowypwr.studenckiekarty.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/games/v1")
public class GamesController {

    private final IUserService userService;

    public GamesController(IUserService userService) {
        this.userService = userService;
    }

    @GetMapping("/blackjack-single-player")
    public String blackjackSinglePlayer(@AuthenticationPrincipal MyUser user, Model model){
        model.addAttribute("player", userService.findUserByNickname(user.getNickname()));

        return "blackjack-single-player";
    }

    @PostMapping("/blackjack-single-player/bet")
    public ResponseEntity<String> placeBet(@AuthenticationPrincipal MyUser user, @RequestBody Map<String, Integer> betData) {
        Integer betAmount = betData.get("bet");
        if (betAmount == null || betAmount < 0) {
            return new ResponseEntity<>("Invalid bet amount", HttpStatus.BAD_REQUEST);
        }

        MyUser currentUser = userService.findUserByNickname(user.getNickname());
        if (currentUser.getBalance() < betAmount) {
            return new ResponseEntity<>("Insufficient balance", HttpStatus.BAD_REQUEST);
        }

        currentUser.setBalance(currentUser.getBalance() - betAmount);
        userService.saveUser(currentUser);

        return new ResponseEntity<>("Bet placed successfully", HttpStatus.OK);
    }

    @PostMapping("/blackjack-single-player/getPrize")
    public ResponseEntity<String> getPrize(@AuthenticationPrincipal MyUser user, @RequestBody Map<String, Integer> prizeData) {
        Integer prizeAmount = prizeData.get("prize");

        MyUser currentUser = userService.findUserByNickname(user.getNickname());

        currentUser.setBalance(currentUser.getBalance() + prizeAmount);
        userService.saveUser(currentUser);

        return new ResponseEntity<>("Prize received successfully", HttpStatus.OK);
    }
}
