import React from "react";

function InfoPanel() {
return (
<div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-12 flex-col justify-center relative">
<div className="absolute inset-0 bg-indigo-700 opacity-60"></div>
<div className="relative z-10">
<h2 className="text-3xl font-bold mb-4">Empowering Every Learner</h2>
<p className="text-lg mb-8 text-indigo-100">
EduAble is designed to make learning accessible for students of all abilities through AI and inclusive design.
</p>
<div className="grid grid-cols-2 gap-4">
<Feature icon="record_voice_over" title="Voice to Text" desc="Real-time speech transcription for the hearing impaired" />
<Feature icon="volume_up" title="Text to Speech" desc="Content read aloud for visually impaired learners" />
<Feature icon="psychology" title="AI Tutor Support" desc="Ask questions and get simple, friendly answers" />
<Feature icon="emoji_objects" title="Adaptive Lessons" desc="Learn at your own pace with personalized guidance" />
</div>
</div>
</div>
);
}

const Feature: React.FC<{ icon: string; title: string; desc: string }> = ({
icon,
title,
desc,
}) => (

<div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4 hover:bg-opacity-20 transition"> <span className="material-symbols-outlined text-3xl mb-2">{icon}</span> <h3 className="font-semibold mb-1">{title}</h3> <p className="text-sm text-indigo-100">{desc}</p> </div> );
export default InfoPanel;