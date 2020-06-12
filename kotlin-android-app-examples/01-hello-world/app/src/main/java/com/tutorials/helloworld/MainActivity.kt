package com.tutorials.helloworld

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    var number = 0;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textView: TextView = findViewById(R.id.counterTxt) as TextView
        var increaseBtn: Button = findViewById(R.id.increaseBtn) as Button
        var decreaseBtn: Button = findViewById(R.id.decreaseBtn) as Button

        increaseBtn.setOnClickListener {
            number = number + 1;
            textView.text = number.toString();
        }

        decreaseBtn.setOnClickListener {
            number = number - 1;
            textView.text = number.toString();
        }

    }
}

