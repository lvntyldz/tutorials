package com.tutorials.progressbar

import android.os.Bundle
import android.os.Handler
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private var i = 0
    private val handler = Handler()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        startProgressBtn.setOnClickListener {

            progressBarComp.setVisibility(View.VISIBLE)

            i = progressBarComp!!.progress

            Thread(Runnable {

                while (i < 100) {
                    i += 5
                    handler.post(Runnable {
                        progressBarComp!!.progress = i
                        progressBarStatusText!!.text = i.toString() + "/" + progressBarComp!!.max
                    })
                    try {
                        Thread.sleep(100)
                    } catch (e: InterruptedException) {
                        e.printStackTrace()
                    }

                }

                if (i == 100) {
                    progressBarComp.setVisibility(View.INVISIBLE)
                }

            }).start()


        }
    }

}
