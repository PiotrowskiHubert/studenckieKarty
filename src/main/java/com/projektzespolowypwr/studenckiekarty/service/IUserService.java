package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.dto.UserDto;
import com.projektzespolowypwr.studenckiekarty.entity.MyUser;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUserService {

    @Transactional
    MyUser add(UserDto newUser);
    MyUser findUserByNickname(String nickname);
    List<MyUser> getAllUsersFilterByBalance();
    MyUser saveUser(MyUser user);

}
