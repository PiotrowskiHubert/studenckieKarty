package com.projektzespolowypwr.studenckiekarty.repository;

import com.projektzespolowypwr.studenckiekarty.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IGameRepository extends JpaRepository<Game, Long> {
    Optional<Game> findByName(String name);
    Optional<Game> findById(Long id);
}
