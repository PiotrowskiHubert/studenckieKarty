package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.dto.UserDto;
import com.projektzespolowypwr.studenckiekarty.entity.MyUser;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public interface IUserService {

    @Transactional
    MyUser add(UserDto newUser);

    MyUser findUserByNickname(String nickname);
}
