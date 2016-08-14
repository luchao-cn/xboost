package org.xboost.base.repository;

import org.springframework.data.repository.CrudRepository;
import org.xboost.base.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
}
