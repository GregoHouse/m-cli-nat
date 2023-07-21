import { View, Text, StyleSheet, FlatList, ScrollView, Pressable, Image } from "react-native";
import logo from "../assets/images/icono_app_matching_-_oscuro.jpg";
import { useEffect, useState } from "react";
import { ButtonCustom } from "../components/ButtonCustom";
import { useNavigation, useRoute } from "@react-navigation/native";
import padeli from '../assets/icons/inactive/padel.png'
import tenisi from '../assets/icons/inactive/tenis.png'
import futboli from '../assets/icons/inactive/football.png';
import golfi from '../assets/icons/inactive/golf.png'
import basqueti from '../assets/icons/inactive/basquet.png'
import hockeyi from '../assets/icons/inactive/hockey.png'
import squashi from '../assets/icons/inactive/squash.png'

import padel from '../assets/icons/active/padel.png'
import tenis from '../assets/icons/active/tenis.png'
import futbol from '../assets/icons/active/football.png';
import golf from '../assets/icons/active/golf.png'
import basquet from '../assets/icons/active/basquet.png'
import hockey from '../assets/icons/active/hockey.png'
import squash from '../assets/icons/active/squash.png'
import { SafeAreaView } from "react-native-safe-area-context";




const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular",
        textAlign: 'center'
    },
}
)


export function QuestionFive() {
    const navigation = useNavigation()
    const route = useRoute();
    const { selectedOptions } = route.params; //["Tenis", "Padel", "Fútbol"]
    const imageInactive = [padeli, tenisi, futboli, golfi, basqueti, hockeyi, squashi]
    const imageActive = [padel, tenis, futbol, golf, basquet, hockey, squash]
    const [allAnswersCompleted, setAllAnswersCompleted] = useState(false);
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const hours = []
    for (var i = 0; i < 25; i++) {
        var hora = ("0" + i).slice(-2) + ":00";
        hours.push(hora);
    }

    const goToReserve = () => {
        navigation.navigate('ReservaCancha');
    };

    const [open, setOpen] = useState({
        tenis: {
            modal: false,
            questions: ['Probando', 'Probando'],
            answers: [
                ['Diestro', 'Zurdo', 'Ambas'],
                ['Reves', 'Derecha', 'Ambas'],
                ['Competitivo', 'Amistoso', 'Ambas'],
                ['Principiante', 'Intermedio', 'Avanzado'],
                
            ],
        },
        padel: {
            modal: false,
            questions: [
                '¿Cuál es tu lateralidad?',
                '¿Tu lado de la cancha?',
                '¿Tipo de juego?',
                '¿A qué categoría perteneces?',

            ],

            answers: [
                ['Diestro', 'Zurdo', 'Ambas'],
                ['Reves', 'Derecha', 'Ambas'],
                ['Competitivo', 'Amistoso', 'Ambas'],
                ['Principiante', 'Intermedio', 'Avanzado'],
            ],
            answerSelect: [
            ]

        },
        futbol: {
            modal: false,
            questions: [],
            answers: [],
            answersSelect: []
        },
        golf: {
            modal: false,
            questions: [],
            answersSelect: []
        },
        basket: {
            modal: false,
            questions: [],
            answers: [],
            answersSelect: []
        },
        hockey: {
            modal: false,
            questions: [],
            answers: [],
            answersSelect: []
        },
        squash: {
            modal: false,
            questions: [],
            answers: [],
            answersSelect: []
        },
    });

    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        const updatedOpen = {};
        let firstSport = null;

        selectedOptions.forEach((sport) => {
            const lowercaseSport = sport.toLowerCase();

            if (open.hasOwnProperty(lowercaseSport)) {
                updatedOpen[lowercaseSport] = open[lowercaseSport];

                if (!firstSport) {
                    firstSport = lowercaseSport;
                    updatedOpen[lowercaseSport].modal = true;
                }
            }
        });

        setOpen(updatedOpen);
    }, [selectedOptions]);


    const handleSportClick = (sport) => {
        setOpen((prevState) => {
            const updatedOpen = {};

            Object.keys(prevState).forEach((key) => {
                updatedOpen[key] = {
                    ...prevState[key],
                    modal: key === sport ? true : false,
                };
            });

            return updatedOpen;
        });
    };

    const handleAnswerClick = (sport, questionIndex, answerIndex) => {
        setSelectedAnswers((prevSelectedAnswers) => {
            const key = `${sport}_${questionIndex}`;
            if (prevSelectedAnswers[key] === answerIndex) {
                // Deseleccionar la respuesta si se hace clic en la misma opción nuevamente
                const { [key]: _, ...updatedAnswers } = prevSelectedAnswers;
                return updatedAnswers;
            } else {
                // Actualizar la respuesta seleccionada o cambiar a una nueva opción
                return {
                    ...prevSelectedAnswers,
                    [key]: answerIndex,
                };

            }

        });
    };

    function areAllAnswersSelected(open, selectedAnswers) {
        for (const sport in open) {
            if (open[sport].modal) {
                for (let i = 0; i < open[sport].questions.length; i++) {
                    const key = `${sport}_${i}`;
                    if (selectedAnswers[key] === undefined) {
                        return false;
                    }
                }
            }
        }
        return true;
    }


    return (
        

            <View className="h-full bg-background_login">
                <View className="absolute top-8 left-[160px]">
                    <Image source={logo} className="w-[66] h-[74px]" />
                </View>
                <View className="absolute left-[120] top-[120]">
                    <Text className="text-white_text text-lg" style={styles.text}>
                        Perfil Deportivo
                    </Text>
                </View>
                <View className="absolute top-[140] left-[5] flex-1 flex-row">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {Object.keys(open).map((sport, index) => (
                            <Pressable
                                className={`mt-4 ${index !== Object.keys(open).length - 1 ? 'mr-4' : ''}`}
                                key={sport}
                                onPress={() => handleSportClick(sport)}
                            >
                                <View
                                    className={`${open[sport].modal
                                        ? "w-[118] h-[64px] rounded-[20px] border-2 border-white flex-row justify-between"
                                        : "border-grey5_6 flex-row justify-between w-[118] h-[64px] rounded-[20px] border-2"
                                        } flex justify-center items-center`}
                                >
                                    <View className="flex-1 items-center justify-center align-center">
                                        <Image
                                            source={open[sport].modal ? imageActive[index] : imageInactive[index]}
                                            className="w-[24px] h-[24px]"
                                        />
                                        <Text
                                            className={`${open[sport].modal
                                                ? "text-white_text text-base flex flex-col text-center"
                                                : "text-base flex flex-col text-grey5_6 text-center"
                                                } capitalize`}
                                            style={{
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: open[sport].modal ? 'white' : 'grey',
                                                ...styles.parrafo,
                                            }}
                                        >
                                            {sport}
                                        </Text>
                                    </View>
                                </View>

                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ width: '100%', position: 'relative', top: 220 }}>
                <ScrollView className="flex">
                        {Object.keys(open).map((sport) => (
                            open[sport].modal && (
                                <View key={sport} style={{ position: 'relative', flexDirection: 'column' }}>
                                    {open[sport].questions.map((question, questionIndex) => (
                                        <View key={questionIndex}>
                                            <View style={styles.text}>
                                                <Text style={styles.text} className="text-white_text text-lg left-5 top-5 mb-[10]">
                                                    {question}
                                                </Text>
                                            </View>
                                            <View className="flex-row top-[20] gap-2 ml-1">
                                                {open[sport].answers[questionIndex].map((answer, answerIndex) => (

                                                    <Pressable
                                                        key={answerIndex}
                                                        onPress={() => handleAnswerClick(sport, questionIndex, answerIndex)}
                                                    >
                                                        <View
                                                            className={`${selectedAnswers[`${sport}_${questionIndex}`] === answerIndex ? "w-[118px] h-[40px]  rounded-[20px] border-2 border-white flex-row justify-between mb-[30]"
                                                                : "border-grey5_6 flex-row justify-between w-[118px] h-[40px] rounded-[20px] border-2 mb-[30]"} flex justify-center items-center`}
                                                        >
                                                            <Text
                                                                className={`${selectedAnswers[`${sport}_${questionIndex}`] === answerIndex ? "text-white_text text-base flex flex-col text-center"
                                                                    : "text-base flex flex-col text-grey5_6 text-center"
                                                                    }`}
                                                                style={{
                                                                    fontSize: 16,
                                                                    textAlign: 'center',
                                                                    color: selectedAnswers[`${sport}_${questionIndex}`] === answerIndex ? 'white' : 'grey',
                                                                    ...styles.parrafo,
                                                                }}
                                                            >
                                                                {answer}
                                                            </Text>
                                                        </View>
                                                    </Pressable>
                                                ))}
                                            </View>
                                        </View>
                                    ))}
                                </View>))
                        )}
                    </ScrollView>
                    <View style={{ position: 'absolute', top: 450, left: 3, width: 370, height: 45 }}>
                        <ButtonCustom disabled={!areAllAnswersSelected(open, selectedAnswers)} onPress={goToReserve} text="Siguiente" style={styles.text} />
                    </View>
                </View>
            </View>

       
    )
}

