import React from "react";
import Event from './Event'


const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8:00 am</td>
                        <Event event='Quidditch Match' color ='blue' location='Hogwarts Quidditch pitch'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Potions Classes' color ='green' location='Potions Classroom, Dungeon' />
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">9:00 am</td>
                        <td></td>
                        <Event event='Magical adventures' color ='red'  location='Forbidden Forest'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10:00 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11:00 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Defense Against the Dark Arts' color ='green' location='DADA Classroom, First Floor'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12:00 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1:00 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Relaxation in the Common Room' color ='yellow' location='Gryffindor Common Room' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2:00 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3:00 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Study time' color ='yellow' location='Gryffindor Common Room'/>
                        <td></td>
                        <td></td>
                        <Event event='Quidditch practice' color ='blue' location='Hogwarts Quidditch pitch'/>
                    </tr>
                    <tr>
                        <td className="time">4:00 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='secret missions' color ='red' location='Hogwarts Library'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5:00 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Quidditch practice' color ='blue' location='Hogwarts Quidditch pitch'/>
                        <Event event='Study time' color ='yellow' location='Gryffindor Common Room'/>
                        <td></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;