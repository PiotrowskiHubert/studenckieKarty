package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.repository.IUserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService {
    private final IUserRepository userRepository;

    public UserDetailService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
