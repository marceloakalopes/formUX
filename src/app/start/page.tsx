"use client";

import { useState, useEffect } from "react";
import { FormEvent } from "react";
import { Progress } from "@/components/ui/progress";

enum Group {
  A = "Eu estudo mas não trabalho",
  B = "Eu estudo e trabalho",
  C = "Eu apenas trabalho",
  D = "Atualmente nem estudo nem trabalho",
}

interface FormUser {
  name?: string;
  phone?: number;
  email?: string;
  age?: number;
  group?: Group;
  goal?: string;
  reason?: string;
  investment?: boolean;
  long_term_goal?: string;
}

export default function StartPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  // Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [group, setGroup] = useState<Group | null>(null);
  const [goal, setGoal] = useState("");
  const [reason, setReason] = useState("");
  const [investment, setInvestment] = useState<boolean | null>(null);
  const [long_term_goal, setLong_term_goal] = useState("");

  // Form Validation
  const [validName, setValidname] = useState<boolean | null>(null);
  const [validPhone, setValidPhone] = useState<boolean | null>(null);

  const handleStart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage(1);
  };

  // Helper function to format phone number
  const formatPhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, "");

    // Format according to Brazilian phone number format
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    } else {
      return phone;
    }
  };

  // Helper function to validate phone number
  const validatePhoneNumber = (phone: string) => {
    // Brazilian phone number regex: (XX) XXXXX-XXXX
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      {stage === 0 ? (
        <form
          onSubmit={handleStart}
          className={`flex flex-col h-screen items-center justify-center transition-all duration-1000 ${
            isLoaded
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-28 opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Mentoria M3
            </h2>
            <p className=" text-lg my-5 text-gray-600">
              Se você chegou até aqui, provavelmente há algo em sua rotina de
              estudos ou em sua performance acadêmica que não está como você
              gostaria. Talvez você esteja enfrentando desafios para manter a
              produtividade, ou simplesmente deseja melhorar seus métodos de
              estudo para alcançar resultados mais expressivos. Foi pensando
              nisso que você decidiu buscar ajuda para colocar sua aprendizagem
              e sua eficiência de volta nos trilhos. E tenho ótimas notícias
              para você: eu estou aqui para ajudá-lo a conquistar exatamente
              isso. Porém, antes de começarmos, é importante que você entenda
              como funciona a nossa mentoria.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <button
                type="submit"
                className="py-3 px-8 font-bold text-xl text-white bg-black rounded-md hover:bg-gray-600 ease-in-out duration-300"
              >
                Iniciar
              </button>

              <div className="flex">
                <p className="text-sm">
                  ou pressione <strong>Enter ↵</strong>
                </p>
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Z" />
                </svg>
              </div>
              <p className="text-sm font-semibold">
                Leva 1 minuto e 30 segundos
              </p>
            </div>
          </div>
        </form>
      ) : stage === 1 ? (
        <div className="flex flex-col items-center min-h-screen max-h-full gap-48">
          <Progress value={progress} className="w-[40%] mt-48" />

          {progress === 0 ? (
            // Part 1 - Name
            <div className="flex">
              <div className="flex items-center h-fit mr-3">
                <h3 className="text-2xl">1</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
              </div>

              <form className="flex flex-col items-start w-[672px]">
                <h3 className=" text-2xl">
                  Primeiramente, como você se chama? *
                </h3>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                    setValidname(true);
                  }}
                  placeholder={
                    validName === false ? "Campo obrigatório" : "Resposta aqui"
                  }
                  className={`text-2xl h-10 my-5 border-b  w-full outline-none focus focus:border-b-2 focus:border-b-black ease-in duration-75 ${
                    validName === false
                      ? "border-red-500 placeholder:text-red-500 focus:border-b-red-500 border-b-2"
                      : "border-b-gray-400"
                  }`}
                />
                <button
                  className={`py-3 px-6 font-bold text-lg text-white bg-black rounded-md hover:bg-gray-700 ease-in duration-100 ${
                    validName === false
                      ? "cursor-not-allowed bg-red-500 hover:bg-red-600"
                      : "cursor-pointer"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (name === "") {
                      setValidname(false);
                    } else {
                      setProgress(progress + 12.5);
                    }
                  }}
                >
                  Próximo
                </button>
              </form>
            </div>
          ) : progress === 12.5 ? (
            // Part 2 - Phone
            <div className="flex">
              <div className="flex items-center h-fit mr-3">
                <h3 className="text-2xl">2</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
              </div>

              <form className="flex flex-col items-start w-[672px]">
                <h3 className=" text-2xl">Qual é o seu WhatsApp? *</h3>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => {
                    const formattedPhone = formatPhoneNumber(e.target.value);
                    setPhone(formattedPhone);
                    setValidPhone(validatePhoneNumber(formattedPhone));
                  }}
                  placeholder={
                    validPhone === false ? "Campo obrigatório" : "Com DDD"
                  }
                  className={`text-2xl h-10 my-5 border-b  w-full outline-none focus focus:border-b-2 focus:border-b-black ease-in duration-75 ${
                    validPhone === false
                      ? "border-red-500 placeholder:text-red-500 focus:border-b-red-500 border-b-2"
                      : "border-b-gray-400"
                  }`}
                />
                <div className="flex gap-2">
                  <button
                    className={`py-3 px-6 font-bold text-lg text-white bg-black rounded-md hover:bg-gray-700 ease-in duration-100 ${
                      validPhone === false
                        ? "cursor-not-allowed bg-red-500 hover:bg-red-600"
                        : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!validatePhoneNumber(phone)) {
                        setValidPhone(false);
                      } else {
                        setProgress(progress + 12.5);
                      }
                    }}
                  >
                    Próximo
                  </button>
                  <button
                    className="py-3 px-6 font-bold text-lg text-black white rounded-md hover:bg-gray-200 ease-in duration-100"
                    onClick={(e) => {
                      e.preventDefault();
                      setProgress(progress - 12.5);
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </form>
            </div>
          ) : progress === 25 ? (
            <div className="flex">
              <div className="flex items-center h-fit mr-3">
                <h3 className="text-2xl">1</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
              </div>

              <form className="flex flex-col items-start w-[672px]">
                <h3 className=" text-2xl">
                  Primeiramente, como você se chama? *
                </h3>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                    setValidname(true);
                  }}
                  placeholder={
                    validName === false ? "Campo obrigatório" : "Resposta aqui"
                  }
                  className={`text-2xl h-10 my-5 border-b  w-full outline-none focus focus:border-b-2 focus:border-b-black ease-in duration-75 ${
                    validName === false
                      ? "border-red-500 placeholder:text-red-500 focus:border-b-red-500 border-b-2"
                      : "border-b-gray-400"
                  }`}
                />
                <button
                  className={`py-3 px-6 font-bold text-lg text-white bg-black rounded-md hover:bg-gray-700 ease-in duration-100 ${
                    validName === false
                      ? "cursor-not-allowed bg-red-500 hover:bg-red-600"
                      : "cursor-pointer"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (name === "") {
                      setValidname(false);
                    } else {
                      setProgress(progress + 12.5);
                    }
                  }}
                >
                  Próximo
                </button>
              </form>
            </div>
          ) : progress === 37.5 ? (
            // Part 3 - Email
            <div className="flex">
              <div className="flex items-center h-fit mr-3">
                <h3 className="text-2xl">1</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
              </div>

              <form className="flex flex-col items-start w-[672px]">
                <h3 className=" text-2xl">
                  Primeiramente, como você se chama? *
                </h3>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                    setValidname(true);
                  }}
                  placeholder={
                    validName === false ? "Campo obrigatório" : "Resposta aqui"
                  }
                  className={`text-2xl h-10 my-5 border-b  w-full outline-none focus focus:border-b-2 focus:border-b-black ease-in duration-75 ${
                    validName === false
                      ? "border-red-500 placeholder:text-red-500 focus:border-b-red-500 border-b-2"
                      : "border-b-gray-400"
                  }`}
                />
                <button
                  className={`py-3 px-6 font-bold text-lg text-white bg-black rounded-md hover:bg-gray-700 ease-in duration-100 ${
                    validName === false
                      ? "cursor-not-allowed bg-red-500 hover:bg-red-600"
                      : "cursor-pointer"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (name === "") {
                      setValidname(false);
                    } else {
                      setProgress(progress + 12.5);
                    }
                  }}
                >
                  Próximo
                </button>
              </form>
            </div>
          ) : // Part 4 - Group
          progress === 50 ? (
            <form>
              <h3>Qual o seu grupo?</h3>
              <select required>
                <option value={Group.A}>{Group.A}</option>
                <option value={Group.B}>{Group.B}</option>
                <option value={Group.C}>{Group.C}</option>
                <option value={Group.D}>{Group.D}</option>
              </select>
              <button>Próximo</button>
            </form>
          ) : progress === 62.5 ? (
            <form>
              <h3>Qual o seu objetivo?</h3>
              <input
                type="text"
                required
                value={goal}
                onChange={(e) => {
                  e.preventDefault();
                  setGoal(e.target.value);
                }}
              />
              <button>Próximo</button>
            </form>
          ) : progress === 75 ? (
            <form>
              <h3>Qual o motivo?</h3>
              <input
                type="text"
                required
                value={reason}
                onChange={(e) => {
                  e.preventDefault();
                  setReason(e.target.value);
                }}
              />
              <button>Próximo</button>
            </form>
          ) : progress === 87.5 ? (
            <form>
              <h3>Você está disposto a investir em você?</h3>
              <select required>
                <option>Sim</option>
                <option>Não</option>
              </select>
              <button>Próximo</button>
            </form>
          ) : progress === 100 ? (
            <form>
              <h3>Qual o seu objetivo a longo prazo?</h3>
              <input
                type="text"
                required
                value={long_term_goal}
                onChange={(e) => {
                  e.preventDefault();
                  setLong_term_goal(e.target.value);
                }}
              />
              <button>Próximo</button>
            </form>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
