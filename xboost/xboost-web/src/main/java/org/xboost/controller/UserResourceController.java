package org.xboost.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/resource")
public class UserResourceController {

	@RequestMapping("/image")
	public void getImage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
		// String fileName =
		// request.getSession().getServletContext().getRealPath("/") +
		// "resources/data/aa.jpg";
		String fileName = "/tmp/data/aa.jpg";

		File file = new File(fileName);
		if (!(file.exists() && file.canRead())) {
			System.out.println("AAAAAAA");
		}

		FileInputStream inputStream = new FileInputStream(file);
		byte[] data = new byte[(int) file.length()];
		int length = inputStream.read(data);
		inputStream.close();

		response.setContentType("image/png");

		OutputStream stream = response.getOutputStream();
		stream.write(data);
		stream.flush();
		stream.close();

		System.out.println("VCVCC");
	}
}
