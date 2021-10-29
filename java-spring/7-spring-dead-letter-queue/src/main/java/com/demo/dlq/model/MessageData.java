package com.demo.dlq.model;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageData implements Serializable {

    private static final long serialVersionUID = -1548401711624941835L;

    private Long id;
    private String name;
    private String description;
}
