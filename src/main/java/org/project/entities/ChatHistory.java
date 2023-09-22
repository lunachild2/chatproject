package org.project.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Data
@Builder
@NoArgsConstructor @AllArgsConstructor
public class ChatHistory extends BaseEntity {

    @Id @GeneratedValue
    private Long seq;

    @Column(length = 20, nullable = false)
    private String nickNm;

    @Column
    private String message;
}
