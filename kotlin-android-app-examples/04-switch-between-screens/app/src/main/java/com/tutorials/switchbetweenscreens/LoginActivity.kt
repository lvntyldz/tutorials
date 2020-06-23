package com.tutorials.switchbetweenscreens

import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        getWindow().getDecorView().setBackgroundColor(Color.GRAY);

        goToHomeBtn.setOnClickListener {

            val username = userTxt.getText().toString();
            var password = passwordTxt.getText().toString();

            println("username : $username")
            println("password : $password")

            if (username.equals("") || password.equals("")) {
                val errMsg = "Kullanıcı Adı ve Şifre boş olamaz!"
                Toast.makeText(this, errMsg, Toast.LENGTH_SHORT).show();
            } else if (!username.equals(password)) {
                val errMsg = "Kullanıcı Adı ve Şifre aynı olmalıdır!"
                Toast.makeText(this, errMsg, Toast.LENGTH_SHORT).show();
            } else {
                val intent = Intent(this, HomeActivity::class.java)
                startActivity(intent)
            }
        }

    }
}
