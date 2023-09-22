package org.project.models.chat;

import lombok.RequiredArgsConstructor;
import org.project.repositories.ChatRoomRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomSaveService {

    private final ChatRoomRepository repository;
}
