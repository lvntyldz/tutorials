package com.example.sqliteusage

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val db = DataBaseHandler(this)
        val addUserBtn = findViewById(R.id.addUserBtn) as Button
        val listUsersBtn = findViewById(R.id.listUsersBtn) as Button

        addUserBtn.setOnClickListener {

            val editTextName = findViewById(R.id.editTextName) as EditText
            val editTextAge = findViewById(R.id.editTextAge) as EditText

            if (editTextName.text.toString().isEmpty() || editTextAge.text.toString().isEmpty()) {
                Toast.makeText(this, "Tüm alanları doldurun", Toast.LENGTH_SHORT).show()
                return@setOnClickListener;
            }

            val user = User(editTextName.text.toString(), editTextAge.text.toString().toInt())
            db.insertData(user)
        }


        listUsersBtn.setOnClickListener {

            val tvResult = findViewById(R.id.tvResult) as TextView

            val data = db.readData()
            tvResult.text = ""
            for (i in 0 until data.size) {
                tvResult.append(
                    data[i].id.toString() + " -- " + data[i].name + " -- " + data[i].age + "\n"
                )
            }
        }
    }

}