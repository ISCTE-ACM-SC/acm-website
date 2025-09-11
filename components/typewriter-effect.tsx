"use client"

import { useState, useEffect } from "react"

const codeLines = [
  { text: "main.java", color: "text-purple-400", isFilename: true },
  { text: "", color: "text-white" },
  { text: "This is a sample Java program demonstrating polymorphism.", color: "text-white" },
  { text: "It uses the Liskov Substitution Principle to show dynamic method binding.", color: "text-white" },
  {
    text: "public class Main{",
    color: "text-white",
    highlight: { public: "text-pink-400", class: "text-pink-400", Main: "text-yellow-300" },
  },
  {
    text: "    public static void main(String[] args) {",
    color: "text-white",
    highlight: {
      public: "text-pink-400",
      static: "text-pink-400",
      void: "text-cyan-300",
      main: "text-cyan-300",
      "String[]": "text-cyan-300",
    },
  },
  { text: "        ", color: "text-white", showCursor: true },
]

export function TypewriterEffect() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return

    const currentLine = codeLines[currentLineIndex]
    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        // Move to next line
        setDisplayedLines((prev) => [...prev, currentLine.text])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [currentLineIndex, currentCharIndex])

  const renderLine = (line: string, index: number, isCurrentLine = false) => {
    const codeLineData = codeLines[index]
    if (!codeLineData) return line

    if (codeLineData.isFilename) {
      return <span className="text-purple-400">{line}</span>
    }

    if (codeLineData.highlight) {
      let result = line
      Object.entries(codeLineData.highlight).forEach(([keyword, className]) => {
        result = result.replace(new RegExp(`\\b${keyword}\\b`, "g"), `<span class="${className}">${keyword}</span>`)
      })
      return <span dangerouslySetInnerHTML={{ __html: result }} />
    }

    return <span className={codeLineData.color}>{line}</span>
  }

  return (
    <div className="relative code-container dark bg-gray-900 border-2 border-gradient-to-r from-orange-400 to-purple-600 rounded-xl p-5 overflow-hidden">
      <div className="overflow-hidden text-justify break-words whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {displayedLines.map((line, index) => (
          <p key={index} className="mb-2">
            {renderLine(line, index)}
          </p>
        ))}
        {currentLineIndex < codeLines.length && (
          <p className="mb-2">
            {renderLine(codeLines[currentLineIndex].text.slice(0, currentCharIndex), currentLineIndex, true)}
            {codeLines[currentLineIndex].showCursor && (
              <span className="inline-block w-2 h-5 bg-white animate-pulse ml-1" />
            )}
          </p>
        )}
      </div>
    </div>
  )
}
