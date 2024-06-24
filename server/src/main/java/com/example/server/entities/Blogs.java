package com.example.server.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "blogs")
public class Blogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private String title;

    @Column(columnDefinition = "json")
    private String body;

    private Date time_created;

    private Date time_edited;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getTime_created() {
        return time_created;
    }

    public void setTime_created(Date time_created) {
        this.time_created = time_created;
    }

    public Date getTime_edited() {
        return time_edited;
    }

    public void setTime_edited(Date time_edited) {
        this.time_edited = time_edited;
    }
}
