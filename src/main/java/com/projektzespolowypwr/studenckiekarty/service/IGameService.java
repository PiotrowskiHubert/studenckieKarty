package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.dto.GameDto;
import com.projektzespolowypwr.studenckiekarty.entity.Game;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IGameService {

    public void add(GameDto gameDto);
    List<Game> getAllGames();
}
