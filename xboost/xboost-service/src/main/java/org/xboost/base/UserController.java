package org.xboost.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.xboost.base.entity.User;
import org.xboost.base.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@RequestMapping("/{id}")
	public User getUser(@PathVariable("id") Long id) {
		return userRepository.findOne(id);
	}
}
