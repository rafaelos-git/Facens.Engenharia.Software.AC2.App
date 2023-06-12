import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import { Home } from '../screens/Home'
import { Students } from '../screens/menus/Students'
import { ListStudents } from '../screens/operations/ListStudents'
import { RegisterStudent } from '../screens/operations/RegisterStudent'
import { ListCourses } from '../screens/operations/ListCourses'
import { RegisterCourse } from '../screens/operations/RegisterCourse'
import { Courses } from '../screens/menus/Courses'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />
        <stackRoutes.Screen
            name="Courses"
            component={Courses}
        />
        <stackRoutes.Screen
            name="Students"
            component={Students}
        />
        <stackRoutes.Screen
            name="ListStudents"
            component={ListStudents}
        />
        <stackRoutes.Screen
            name="RegisterStudent"
            component={RegisterStudent}
        />
        <stackRoutes.Screen
            name="ListCourses"
            component={ListCourses}
        />
        <stackRoutes.Screen
            name="RegisterCourse"
            component={RegisterCourse}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes