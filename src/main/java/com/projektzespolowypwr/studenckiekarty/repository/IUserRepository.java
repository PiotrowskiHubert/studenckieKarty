package com.projektzespolowypwr.studenckiekarty.repository;

import com.projektzespolowypwr.studenckiekarty.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
}
