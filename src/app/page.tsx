//@ts-ignore
"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PointerLockControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="The Billiards Room"
        frameBorder="0"
        allowFullScreen
        //@ts-ignore
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/79615d823a9149069dcd06c20bc9707f/embed?ui_infos=0&ui_watermark_link=0&ui_watermark=0"
        style={{ width: "100%", height: "500px" }}
      ></iframe>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-500">
      <SketchfabEmbed />
    </div>
  );
}
