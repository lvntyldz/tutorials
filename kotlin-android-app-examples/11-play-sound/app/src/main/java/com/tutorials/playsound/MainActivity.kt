package com.tutorials.playsound

import android.media.MediaPlayer
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var mediaPlayer: MediaPlayer? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        playSoundBtn.setOnClickListener {

            mediaPlayer = MediaPlayer.create(this, R.raw.alert)
            mediaPlayer?.start()
        }
    }
}