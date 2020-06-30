package com.tutorials.datetimepicker

import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        dateTextView!!.text = "--/--/----"
        timeTextView!!.text = "--:--"

        val now = Calendar.getInstance()

        changeDateBtn.setOnClickListener {
            val datePicker = DatePickerDialog(this,
                    DatePickerDialog.OnDateSetListener { view, year, month, dayOfMonth ->
                        dateTextView!!.text = "$dayOfMonth/$month/$year"
                    },
                    now.get(Calendar.YEAR), now.get(Calendar.MONTH), now.get(Calendar.DAY_OF_MONTH)
            )
            datePicker.show()
        }

        changeTimeBtn.setOnClickListener {

            val timePicker = TimePickerDialog(this,
                    TimePickerDialog.OnTimeSetListener { view, hourOfDay, minute ->
                        timeTextView!!.text = "$hourOfDay:$minute"
                    },
                    now.get(Calendar.HOUR_OF_DAY),
                    now.get(Calendar.MINUTE), false)
            timePicker.show()

        }

    }
}