package com.tutorials.showcustomtoast

import android.os.Bundle
import android.view.Gravity
import android.view.LayoutInflater
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.toast_layout.view.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        showToastBtn.setOnClickListener {
            createCustomToast(
                message = "Custom Toast Message",
                imageSrc = R.drawable.info
            )
        }
    }

    fun createCustomToast(message: String, imageSrc: Int) {
        val toast = Toast(this)
        toast.apply {
            val layout =
                LayoutInflater.from(applicationContext)
                    .inflate(R.layout.toast_layout, null, false)

            layout.toastTextView.text = message
            layout.toastImageView.setImageResource(imageSrc)

            setGravity(Gravity.CENTER, 0, 0)
            setDuration(Toast.LENGTH_SHORT)
            setView(layout)
            show()
        }
    }
}
