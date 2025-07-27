import logo from "../assets/App-Icon.svg";
import Footer from "../components/Footer";
import icon from "../assets/icon/chevron-left.png";
import { Link } from "react-router-dom";
const DeleteAccountPolicy = () => {
    return (
        <div>
            <div className="bg-black font-hubot whitespace-normal  p-10 text-white m-auto  max-w-[700px] w-full  min-h-screen  font-hubspot">
                <div className="h-[40px] p-2 hover:cursor-pointer  hover:bg-[#DBFD01] bg-[#232323] flex items-center justify-right w-[40px] ml-0 mr-0 m-auto ">
                    <Link to="/">
                        <img className="" src={icon} alt="back-icon" />
                    </Link>
                </div>
                <div className="w-full h-full  mx-auto">
                    <div className="text-center flex flex-col gap-2 justify-center items-center w-full m-auto mb-8">
                        <img
                            src={logo}
                            alt="Foova w-[20.6%] Logo"
                            className=" m-auto w-28 sm:-w-40"
                        />
                        <h1 className="text-[150.5%] font-hubot mt-4 font-bold">
                            USUNIĘCIE KONTA W APLIKACJI FOOVA FAN CENTER
                        </h1>

                        <div className="w-fit p-3 h-fit m-auto  flex items-center justify-center bg-[#1A1A1A]  ">
                            <p className="text-sm text-gray-400 ">Ostatnia zmiana: 15.07.2025</p>
                        </div>
                        <div className="w-[153px] mt-2 flex items-center justify-center text-[#1A1A1A] font-hubot font-bold h-[48px] p-2 bg-[#DBFD01] uppercase">
                            <span>pobierz apkę</span>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="space-y-6 font-hubot text-base leading-loose whitespace-pre-wrap">
                        <p>
                            Jeśli chcesz usunąć swoje konto użytkownika w aplikacji FOOVA Fan
                            Center, prosimy o przesłanie wiadomości e-mail z prośbą o usunięcie
                            konta na adres:{" "}
                            <a href="mailto:support@foova.org" className="underline text-blue-400">
                                support@foova.org
                            </a>
                            .
                        </p>

                        <h3 className="text-xl font-semibold">W treści wiadomości należy podać:</h3>
                        <ul className="list-disc pl-6">
                            <li>nazwę użytkownika (nick),</li>
                            <li>adres e-mail powiązany z kontem,</li>
                            <li>jednoznaczne żądanie usunięcia konta.</li>
                        </ul>

                        <p>
                            Po otrzymaniu Twojej prośby, przeprowadzimy weryfikację tożsamości i
                            rozpoczniemy proces trwałego usunięcia konta oraz powiązanych z nim
                            danych osobowych, zgodnie z naszą Polityką Prywatności oraz art. 17
                            RODO. Proces ten może potrwać do 14 dni roboczych.
                        </p>

                        <h3 className="text-xl font-semibold">
                            Usunięcie konta jest nieodwracalne i oznacza:
                        </h3>
                        <ul className="list-disc pl-6">
                            <li>utratę historii predykcji i punktów,</li>
                            <li>brak możliwości odbioru nieprzyznanych jeszcze nagród,</li>
                            <li>trwałe zakończenie udziału w grze.</li>
                        </ul>

                        <p>Dziękujemy za korzystanie z aplikacji FOOVA Fan Center.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DeleteAccountPolicy;
