package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.dto.UserDto;
import com.projektzespolowypwr.studenckiekarty.entity.MyUser;
import com.projektzespolowypwr.studenckiekarty.repository.IUserRepository;
import jakarta.transaction.Transactional;
import org.hibernate.ObjectNotFoundException;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Primary
public class JpaUserService implements IUserService{
    private final IUserRepository userRepository;

    public JpaUserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public MyUser add(UserDto newUser) {
        final MyUser myUser = MyUser.builder()
                .username(newUser.getUsername())
                .password(new BCryptPasswordEncoder().encode(newUser.getPassword()))
                .nickname(newUser.getUsername())
                .role("ROLE_USER")
                .balance(100L)
                .enabled(true)
                .build();
        return userRepository.save(myUser);
    }

    @Override
    public MyUser findUserByNickname(String nickname) {
        final Optional<MyUser> opUser = userRepository.findByNickname(nickname);
        if (opUser.isPresent()){
            return opUser.get();
        }else {
            throw new ObjectNotFoundException(Optional.ofNullable(nickname), "User");
        }
    }

    @Override
    public List<MyUser> getAllUsersFilterByBalance() {
        Optional<List<MyUser>> opUsers = Optional.of(userRepository.findAllByOrderByBalanceDesc());

        if(!opUsers.isEmpty()){
            return opUsers.get();
        }else {
            return Collections.emptyList();
        }
    }

    @Override
    public MyUser saveUser(MyUser user) {
        return userRepository.save(user);
    }
}
