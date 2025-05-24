
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SpeechToText: React.FC = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [selectedLang, setSelectedLang] = useState("en-US");
  const [paused, setPaused] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = selectedLang;

    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i];
        const transcriptText = result[0].transcript;
        if (result.isFinal) {
          setTranscript((prev) => prev + transcriptText + " ");
        } else {
          interimTranscript += transcriptText;
        }
      }
      // Optionally: display interimTranscript somewhere
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [selectedLang]);

  const toggleListening = () => {
    if (paused) {
      resumeRecognition();
    } else if (listening) {
      pauseRecognition();
    } else {
      startRecognition();
    }
  };

  const startRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = selectedLang;
      recognitionRef.current.start();
      setListening(true);
      setPaused(false);
    }
  };

  const pauseRecognition = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop(); // No native pause
      setPaused(true);
      setListening(false);
    }
  };

  const resumeRecognition = () => {
    if (recognitionRef.current && paused) {
      recognitionRef.current.start();
      setListening(true);
      setPaused(false);
    }
  };

  const stopRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      setPaused(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    alert("Text copied to clipboard!");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "EduAble.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleClear = () => {
    setTranscript("");
  };
  return (
    <div id="webcrumbs"> 
          <div className="w-[1200px] p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl font-sans">
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 mb-3">Speech to Text Converter</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Transform your voice into text instantly. Perfect for notes, transcripts, and accessibility.</p>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 mb-4">
          <span className="material-symbols-outlined text-primary-600">speed</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Real-time Transcription</h3>
        <p className="text-gray-600">Convert speech to text instantly as you speak, with minimal delay.</p>
      </div>
  
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 mb-4">
          <span className="material-symbols-outlined text-primary-600">language</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
        <p className="text-gray-600">Support for over 60 languages and regional dialects worldwide.</p>
      </div>
  
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 mb-4">
          <span className="material-symbols-outlined text-primary-600">verified</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">High Accuracy</h3>
        <p className="text-gray-600">Advanced AI models ensure precise transcription even in noisy environments.</p>
      </div>
    </div>
  
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="bg-gray-50 rounded-xl p-6 h-[300px] overflow-y-auto border border-gray-200">
              <div className="text-gray-500 italic text-center h-full flex items-center justify-center" id="transcription-output">
                Your transcribed text will appear here...
                {/* Next: "Add real-time transcription display with timestamps" */}
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" onClick={handleCopy}>
                Copy Text
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" onClick={handleDownload}>
                Download .txt
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 bg-primary-50 rounded-full flex items-center justify-center mb-6 group">
                <div className="absolute inset-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <button
                onClick={toggleListening}
                className={`h-24 w-24 rounded-full text-white text-2xl ${
                  listening ? "bg-red-500 hover:bg-red-600" : "bg-indigo-600 hover:bg-indigo-700"
                } flex items-center justify-center mx-auto transition-colors`}
              >
                    <span className="material-symbols-outlined text-white text-4xl">mic</span>

                  </button>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-primary-200 opacity-0 group-hover:opacity-100 animate-ping transition-opacity"></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{listening ? "Listening..." : paused ? "Paused" : "Click mic to start"}</p>
              <p className="text-center text-gray-600 mb-4">Tap the microphone to start recording</p>
              
              <div className="flex gap-3 mb-6">
                <button onClick={stopRecognition} className="h-10 w-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-red-600">stop</span>
                </button>
                <button onClick={pauseRecognition}
    disabled={!listening} className="h-10 w-10 rounded-full bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-yellow-600">pause</span>
                </button>
              </div>
              
              <div className="w-full">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="font-medium">Language Settings</span>
                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 mt-2 bg-gray-50 rounded-lg">
                    <label className="block mb-2 text-sm font-medium">Select Language</label>
                    <select id="language"  value={selectedLang}  onChange={(e) => setSelectedLang(e.target.value)} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                      <option value="en-US">English (US)</option>
                      <option value="en-GB">English (UK)</option>
                      <option value="fr-FR">French</option>
                      <option value="es-ES">Spanish</option>
                      <option value="de-DE">German</option>
                      <option value="ja-JP">Japanese</option>
                      <option value="zh-CN">Chinese (Simplified)</option>
                    </select>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-gray-600">Microphone status: Ready</span>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-500">volume_up</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-500">settings_voice</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="bg-gradient-to-r from-indigo-600 to-primary-600 rounded-2xl p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Upgrade to Premium</h2>
          <p className="mb-6">Get unlimited transcription time, advanced editing features, and priority support.</p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Unlimited transcription time</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Export to various formats (DOCX, PDF, SRT)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Advanced editing and formatting tools</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Speaker identification</span>
            </li>
          </ul>
          <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Upgrade Now
          </button>
        </div>
        
        <div className="hidden md:block">
          <img src="https://images.unsplash.com/photo-1706466614149-5e04fd018a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhaXxlbnwwfHx8fDE3NDgwNTI2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="AI Speech Recognition" className="w-full max-w-sm mx-auto" keywords="AI, speech recognition, voice transcription, premium features" />
          {/* Next: "Add animated illustration showing speech to text process" */}
        </div>
      </div>
    </div>
  </div> 
        </div>
  );
};

export default SpeechToText;



