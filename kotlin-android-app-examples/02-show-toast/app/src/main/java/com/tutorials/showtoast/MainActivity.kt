package com.tutorials.showtoast

import android.graphics.Color
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val showSimpleToastBtn: Button = findViewById(R.id.showToasBtn1)
        val showAnotherToastBtn: Button = findViewById(R.id.showToasBtn2)
        val showToastWithStyleBtn: Button = findViewById(R.id.showToasBtn3)

        showSimpleToastBtn.setOnClickListener {
            val msg = "Simple Short Toast Message with kotlin."
            val duration = Toast.LENGTH_SHORT

            Toast.makeText(applicationContext, msg, duration).show()
        }

        showAnotherToastBtn.setOnClickListener {
            val msg = "Another Toast Message with kotlin."
            val duration = Toast.LENGTH_SHORT
            val toast = Toast.makeText(applicationContext, msg, duration)

            toast.setGravity(Gravity.TOP or Gravity.LEFT, 0, 0)
            toast.show()
        }

        showToastWithStyleBtn.setOnClickListener {
            val msg = "Kotlin Toast Message With Style"
            val duration = Toast.LENGTH_SHORT
            val toast = Toast.makeText(applicationContext, msg, duration)

            val view: View = toast.view
            view.setBackgroundColor(Color.RED)

            val text = view.findViewById<View>(android.R.id.message) as TextView
            text.setTextColor(Color.WHITE)

            toast.setGravity(Gravity.TOP or Gravity.RIGHT, 0, 0)
            toast.show()
        }

    }
}

