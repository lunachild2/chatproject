package org.project.models.chat;

import lombok.RequiredArgsConstructor;
import org.project.controllers.chat.ChatMessageForm;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatMessageSaveService {

    private final ChatMessageForm messageForm;

    private void save() {

    }
}
