package br.com.proj.services;

import br.com.proj.entities.User;
import br.com.proj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> findAll(){
        return repository.findAll();
    }

    public Optional<User> findById(Long id){
        return repository.findById(id);
    }

    public User insert(User obj){
        return repository.save(obj);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public Optional<User> update(Long id, User obj){
        return repository.findById(id)
                .map(u -> {
                    u.setName(obj.getName());
                    u.setEmail(obj.getEmail());
                    u.setCpf(obj.getCpf());
                    u.setPhone(obj.getPhone());
                    u.setCep(obj.getCep());
                    u.setPassword(obj.getPassword());
                    u.setConfirmPassword(obj.getConfirmPassword());
                    return repository.save(u);
                });
    }
}
