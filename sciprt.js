(function () {
  // ──────────────────────────────────────
  // WORD BANK - vocabulary from word.txt
  // ──────────────────────────────────────
  const wordBank = [
    "Shelf",
    "Librarian",
    "The stacks",
    "Return",
    "Fine",
    "Magazine",
    "Copier",
    "Overdue",
    "Reading room",
    "Reference room",
    "Periodical room",
    "Study lounge",
    "Catalogue",
    "Index",
    "Keyword",
    "Volume",
    "Library card",
    "Book reservation",
    "Periodical",
    "Quarterly",
    "Back issue",
    "Current issue",
    "Latest number",
    "Writing permission",
    "Check out",
    "Put on reserve",
    "Freshman",
    "Sophomore",
    "Junior student",
    "Senior student",
    "Bachelor",
    "Master",
    "Doctoral candidate",
    "Alumni/alumnus",
    "Post doctorate",
    "Lecturer",
    "Associate professor",
    "Supervisor",
    "Professor",
    "Dean",
    "Teaching assistant",
    "Take the course",
    "Credit",
    "Register",
    "Drop the course",
    "Introductory course",
    "Advanced course",
    "Rank",
    "Syllabus",
    "Curriculum",
    "Seminar",
    "Elective/optional course",
    "Compulsory course",
    "Drop-out",
    "Makeup exam",
    "Psychology course",
    "Physics",
    "Computer course",
    "Computer science",
    "Book review",
    "Novel",
    "Press",
    "Publisher",
    "Publication",
    "Biography",
    "Editorial",
    "Extra copy",
    "Paperback edition",
    "Out of print",
    "Read selectively",
    "Get through a novel",
    "Be addicted to the book",
    "Plough through",
    "Read extensively",
    "Devote to",
    "Run for",
    "Candidate",
    "Vote",
    "Conflict",
    "Election campaign",
    "Campaign manager",
    "Participant",
    "The studentâ€™s union",
    "Chairman",
    "Speech contest",
    "Enroll in",
    "Sign up for",
    "Convenience store",
    "Department store",
    "Mall",
    "Chain store",
    "Shopping list",
    "Supermarket",
    "Family size",
    "Receipt",
    "Outlet",
    "On sale",
    "Sell out",
    "Grocery store",
    "Out of stock",
    "In stock",
    "Customer",
    "Complaint",
    "Deliver",
    "Counter",
    "Closing time",
    "Balance",
    "Luxurious items",
    "Electronic product",
    "Stationery",
    "Digital video camera",
    "Past the prime",
    "Housework",
    "Electric cooker",
    "Laundry",
    "Iron",
    "Vacuum cleaner",
    "Housemaid",
    "Housekeeper",
    "Housewife",
    "Keep an eye on",
    "Household expenses",
    "Keep down the cost",
    "Fix the dinner",
    "Budget",
    "In a mess",
    "Economical",
    "Leisure time",
    "Telephone booth",
    "Date",
    "Pay phone",
    "Call on sb.",
    "Long-distance call",
    "Take a message",
    "Hang up",
    "Keep contact",
    "Hold on",
    "Hospitable",
    "Job hunting",
    "Inexperienced",
    "Opportunity",
    "Want ads",
    "Unemployment",
    "Position",
    "Wage",
    "Opening/vacancy",
    "Full-time job",
    "Part-time job",
    "Inquiry",
    "Do odd jobs",
    "Consult",
    "Resume",
    "Application letter",
    "Fire",
    "Hire",
    "Recruit",
    "Interview",
    "Job-hopping",
    "Interviewee",
    "Take over",
    "Interviewer",
    "Appointment",
    "Impression",
    "Confident",
    "Turn down",
    "Have no match forâ€¦",
    "On business",
    "Be involved in",
    "Appointment",
    "In charge of",
    "Client",
    "Compromise",
    "Get along with",
    "Proposal",
    "Assistance",
    "Branch",
    "Cooperation",
    "Transaction",
    "Bid",
    "Transfer",
    "Attitude",
    "Personality",
    "Overwork",
    "Determined",
    "Forgetful",
    "Diligent",
    "Wear out",
    "Perseverance",
    "Hang on",
    "Workaholic",
    "Workload",
    "Struggle",
    "Continuous exploration",
    "Hard-working",
    "Recognition",
    "Tribute",
    "Achievement",
    "Pioneer",
    "Contribution",
    "Blaze a trail",
    "Symbol",
    "Legend",
    "Napkin",
    "Beverage",
    "Gardening",
    "Excursion",
    "Performance",
    "TV channels",
    "Horror movie",
    "Broadcast",
    "Live broadcast",
    "Documentary",
    "Violence movie",
    "Commercial advertisement",
    "Entertainment industry",
    "TV theater",
    "Waiter/waitress",
    "Pork",
    "Beef steak",
    "Menu",
    "Raw",
    "Medium",
    "Done",
    "Dessert",
    "Snack",
    "Join sb. for dinner",
    "Appetizer",
    "Make a reservation",
    "Cutlery",
    "Loaf",
    "Buffet",
    "Staple",
    "Go dutch",
    "Regular dinner",
    "Mutton",
    "Change",
    "Epidemic",
    "Sore throat",
    "Bird flu",
    "Runny nose",
    "SARS",
    "Stomachache",
    "Infectious illness",
    "Toothache",
    "Symptom",
    "Allergy",
    "Sneeze",
    "Fracture",
    "Diabetes",
    "Have a temperature",
    "Dental decay",
    "Attending/chief doctorï¼›physicianï¼›consultant",
    "Infirmary",
    "Physician",
    "Surgeon",
    "Clinic",
    "Anaesthetist",
    "Put on weight",
    "Watch your diet",
    "Overweight",
    "On diet",
    "Lose weight",
    "Physical exercise",
    "In good shape",
    "In a fit state",
    "Out of shape",
    "Fit as a fiddle",
    "In poor shape",
    "Feel under the weather",
    "Travel agency",
    "Flight number",
    "Check in",
    "Motel",
    "Book the ticket",
    "Platform",
    "Hiking",
    "Hitch-hike",
    "Conductor",
    "Skiing",
    "Mineral bath",
    "Streetcar",
    "Resort",
    "Visa",
    "Express train",
    "High-speed train",
    "Shuttle",
    "Ferry",
    "Tube/underground",
    "Expressway/freeway",
    "Roundtrip",
    "Prosperous",
    "Decline",
    "Depression",
    "Recession",
    "Collapse",
    "Bankrupt",
    "Monetary",
    "Circulation",
    "Financier",
    "Surplus",
    "Inflation",
    "Deflation",
    "Economic crisis",
    "Potential",
    "Cyberspace",
    "Multimedia",
    "Hacker",
    "Server",
    "Recycled water",
    "Renewable energy",
    "Sewage treatment",
    "Recyclable",
    "Deforestation rate",
    "Water and soil erosion",
    "Temperature",
    "Muggy",
    "Humidity",
    "Breeze",
    "Climate trend",
    "Climate variation",
    "Climate warming",
    "Climate watch",
    "Climate-sensitive activity",
    "Climatic anomaly",
    "Conservation area",
    "Forecast",
    "Downpour",
    "Gust",
    "Landlord/landlady",
    "Ventilation",
    "Tenant",
    "Accommodate",
    "Apartment/flat",
    "Dwell",
    "Residence",
    "Downtown",
    "Hallway",
    "Suburb",
    "Spare room",
    "Neighborhood",
    "Burglar",
    "Transportation",
    "House-warming party",
    "Subway entrance",
    "Furnished",
    "Crack",
    "Unfurnished",
    "Install",
    "Baby crib",
    "Maintenance",
    "Decoration",
    "Plumber",
    "Multiple glazing",
    "Washing machine",
    "Cupboard",
    "Refrigerator/fridge",
    "Sideboard",
    "Light bulb",
    "Sink",
    "Heater",
    "Pipe",
    "Furnace",
    "Leak",
    "Air conditioner",
  ];

  // ───────────────────────────
  // DOM ELEMENTS
  // ───────────────────────────
  const btnSpeak = document.getElementById("btnSpeak");
  const btnCheck = document.getElementById("btnCheck");
  const btnSkip = document.getElementById("btnSkip");
  const btnGiveUp = document.getElementById("btnGiveUp");
  const letterFields = document.getElementById("letterFields");
  const feedbackEl = document.getElementById("feedback");
  const hintText = document.getElementById("hintText");
  const soundVisual = document.getElementById("soundVisual");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const streakDisplay = document.getElementById("streakDisplay");
  const wordsAttemptedDisplay = document.getElementById("wordsAttempted");
  const speedRange = document.getElementById("speedRange");
  const speedValue = document.getElementById("speedValue");

  // ───────────────────────────
  // STATE
  // ───────────────────────────
  let currentWord = "";
  let score = 0;
  let streak = 0;
  let wordsAttempted = 0;
  let isSpeaking = false;
  let wordLocked = false; // true after correct answer until new word
  let hintRevealed = false;
  let speechRate = Number(speedRange.value);
  const dictionaryAudioCache = new Map();
  const onlineAudio = new Audio();

  // ───────────────────────────
  // SPEECH SYNTHESIS
  // ───────────────────────────
  function getVoices() {
    return new Promise((resolve) => {
      let voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        resolve(voices);
      } else {
        speechSynthesis.addEventListener(
          "voiceschanged",
          () => {
            resolve(speechSynthesis.getVoices());
          },
          { once: true },
        );
      }
    });
  }

  function setSpeakingState(speaking) {
    isSpeaking = speaking;
    btnSpeak.classList.toggle("speaking", speaking);
    if (speaking) {
      startVisualizer();
    } else {
      stopVisualizer();
    }
  }

  function stopCurrentAudio() {
    speechSynthesis.cancel();
    onlineAudio.pause();
    onlineAudio.removeAttribute("src");
    onlineAudio.load();
    setSpeakingState(false);
  }

  function setSpeechRate(value) {
    speechRate = Number(value);
    speedValue.textContent = `${speechRate.toFixed(2).replace(/0$/, "")}x`;
    onlineAudio.playbackRate = speechRate;
  }

  async function getDictionaryAudioUrl(word) {
    const lookupWord = word.trim().toLowerCase();
    if (!/^[a-z-]+$/.test(lookupWord)) {
      return "";
    }

    if (dictionaryAudioCache.has(lookupWord)) {
      return dictionaryAudioCache.get(lookupWord);
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lookupWord)}`,
      );
      if (!response.ok) {
        dictionaryAudioCache.set(lookupWord, "");
        return "";
      }

      const entries = await response.json();
      const audioUrl =
        entries
          .flatMap((entry) => entry.phonetics || [])
          .map((phonetic) => phonetic.audio || "")
          .find(Boolean) || "";

      dictionaryAudioCache.set(lookupWord, audioUrl);
      return audioUrl;
    } catch (error) {
      dictionaryAudioCache.set(lookupWord, "");
      return "";
    }
  }

  function getOnlineTtsUrl(word) {
    return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-US&ttsspeed=${speechRate}&q=${encodeURIComponent(word)}`;
  }

  function getSpokenText(word) {
    return word
      .replace(/\bsb\./gi, "somebody")
      .replace(/\//g, " or ")
      .replace(/&/g, " and ")
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isSingleDictionaryWord(word) {
    return /^[a-z-]+$/i.test(word.trim());
  }

  function playAudioUrl(url) {
    return new Promise((resolve, reject) => {
      onlineAudio.pause();
      onlineAudio.src = url;
      onlineAudio.playbackRate = speechRate;
      onlineAudio.onplay = () => setSpeakingState(true);
      onlineAudio.onended = () => {
        setSpeakingState(false);
        resolve();
      };
      onlineAudio.onerror = () => {
        setSpeakingState(false);
        reject(new Error("Audio source failed"));
      };
      onlineAudio.play().catch((error) => {
        setSpeakingState(false);
        reject(error);
      });
    });
  }

  async function speakWithBrowserVoice(word) {
    if (isSpeaking) {
      stopCurrentAudio();
      await new Promise((r) => setTimeout(r, 80));
    }

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(getSpokenText(word));
      utterance.lang = "en-US";
      utterance.rate = speechRate;
      utterance.pitch = 1;
      utterance.volume = 1;

      getVoices()
        .then((voices) => {
          const enVoice =
            voices.find(
              (v) =>
                v.lang.startsWith("en") &&
                /natural|online|premium|enhanced|google|microsoft|samantha|daniel|zira|aria|jenny|guy/i.test(
                  v.name,
                ),
            ) ||
            voices.find((v) => v.lang.startsWith("en")) ||
            voices[0];

          if (enVoice) {
            utterance.voice = enVoice;
          }
        })
        .finally(() => {
          utterance.onstart = () => setSpeakingState(true);

          utterance.onend = () => {
            setSpeakingState(false);
            resolve();
          };

          utterance.onerror = (e) => {
            console.warn("Speech error:", e);
            setSpeakingState(false);
            if (
              e.error === "language-unavailable" ||
              e.error === "voice-unavailable"
            ) {
              const fallback = new SpeechSynthesisUtterance(getSpokenText(word));
              fallback.lang = "en-US";
              fallback.rate = speechRate;
              fallback.onend = () => {
                setSpeakingState(false);
                resolve();
              };
              fallback.onerror = () => {
                setSpeakingState(false);
                resolve();
              };
              fallback.onstart = () => setSpeakingState(true);
              speechSynthesis.speak(fallback);
            } else {
              resolve();
            }
          };

          speechSynthesis.speak(utterance);
        });
    });
  }

  async function speakWord(word) {
    if (isSpeaking) {
      stopCurrentAudio();
      await new Promise((r) => setTimeout(r, 80));
    }

    const spokenText = getSpokenText(word);
    const singleWord = isSingleDictionaryWord(word);

    if (singleWord) {
      try {
        const dictionaryAudioUrl = await getDictionaryAudioUrl(word);
        if (dictionaryAudioUrl) {
          await playAudioUrl(dictionaryAudioUrl);
          return;
        }
      } catch (error) {
        console.warn("Dictionary audio unavailable:", error);
      }
    } else {
      await speakWithBrowserVoice(spokenText);
      return;
    }

    try {
      await playAudioUrl(getOnlineTtsUrl(spokenText));
      return;
    } catch (error) {
      console.warn("Online TTS unavailable, using browser voice:", error);
    }

    await speakWithBrowserVoice(spokenText);
  }

  // ───────────────────────────
  // VISUALIZER
  // ───────────────────────────
  let visualizerInterval = null;

  function startVisualizer() {
    soundVisual.classList.add("active");
    // Randomize bar heights periodically
    if (visualizerInterval) clearInterval(visualizerInterval);
    const bars = soundVisual.querySelectorAll(".bar");
    visualizerInterval = setInterval(() => {
      bars.forEach((bar) => {
        const h = Math.floor(Math.random() * 38) + 6;
        bar.style.height = h + "px";
      });
    }, 80);
  }

  function stopVisualizer() {
    soundVisual.classList.remove("active");
    if (visualizerInterval) {
      clearInterval(visualizerInterval);
      visualizerInterval = null;
    }
    // Reset bars
    const bars = soundVisual.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.style.height = "6px";
    });
  }

  // ───────────────────────────
  // PICK RANDOM WORD
  // ───────────────────────────
  function pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randomIndex].trim();
  }

  function normalizeAnswer(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function isGuideCharacter(char) {
    return !/[a-z0-9]/i.test(char);
  }

  function getLetterBoxes() {
    return Array.from(letterFields.querySelectorAll(".letter-box"));
  }

  function focusFirstBox() {
    const firstBox =
      getLetterBoxes().find((box) => !box.disabled && !box.value) ||
      getLetterBoxes().find((box) => !box.disabled);
    if (firstBox) {
      firstBox.focus();
      firstBox.select();
    }
  }

  function focusNextBox(box) {
    const boxes = getLetterBoxes();
    const currentIndex = boxes.indexOf(box);
    const nextBox = boxes
      .slice(currentIndex + 1)
      .find((item) => !item.disabled);
    if (nextBox) {
      nextBox.focus();
      nextBox.select();
    }
  }

  function focusPreviousBox(box) {
    const boxes = getLetterBoxes();
    const currentIndex = boxes.indexOf(box);
    const previousBoxes = boxes.slice(0, currentIndex).reverse();
    const previousBox = previousBoxes.find((item) => !item.disabled);
    if (previousBox) {
      previousBox.focus();
      previousBox.select();
    }
  }

  function setFieldsDisabled(disabled) {
    getLetterBoxes().forEach((box) => {
      box.disabled = disabled;
    });
  }

  function flashFields(className, duration) {
    letterFields.classList.add(className);
    setTimeout(() => letterFields.classList.remove(className), duration);
  }

  function getRawAnswer() {
    const valuesByIndex = new Map();
    getLetterBoxes().forEach((box) => {
      valuesByIndex.set(Number(box.dataset.index), box.value);
    });

    return currentWord
      .split("")
      .map((char, index) => {
        if (isGuideCharacter(char)) {
          return char;
        }
        return valuesByIndex.get(index) || " ";
      })
      .join("");
  }

  function hasTypedLetter() {
    return getLetterBoxes().some((box) => box.value.trim());
  }

  function renderLetterFields(word) {
    letterFields.innerHTML = "";
    let wordGroup = document.createElement("span");
    wordGroup.className = "letter-word";
    letterFields.appendChild(wordGroup);

    word.split("").forEach((char, index) => {
      if (char === " ") {
        wordGroup = document.createElement("span");
        wordGroup.className = "letter-word";
        letterFields.appendChild(wordGroup);
        return;
      }

      if (isGuideCharacter(char)) {
        const separator = document.createElement("span");
        separator.className = "letter-separator";
        separator.textContent = char;
        separator.setAttribute("aria-hidden", "true");
        wordGroup.appendChild(separator);
        return;
      }

      const box = document.createElement("input");
      box.className = "letter-box";
      box.type = "text";
      box.maxLength = 1;
      box.inputMode = "text";
      box.autocomplete = "off";
      box.autocorrect = "off";
      box.autocapitalize = "off";
      box.spellcheck = false;
      box.dataset.index = String(index);
      box.setAttribute("aria-label", `Letter ${index + 1}`);
      wordGroup.appendChild(box);
    });
  }

  function keepCorrectLettersOnly(answer, target) {
    getLetterBoxes().forEach((box) => {
      const index = Number(box.dataset.index);
      const targetChar = target[index];
      const answerChar = answer[index] || "";

      if (answerChar.toLowerCase() === targetChar.toLowerCase()) {
        box.value = targetChar.toLowerCase();
        box.classList.add("locked");
        box.disabled = true;
      } else {
        box.value = "";
        box.classList.remove("locked");
        box.disabled = false;
      }
    });
    focusFirstBox();
  }

  function fillLetterFields(word) {
    getLetterBoxes().forEach((box) => {
      const index = Number(box.dataset.index);
      box.value = word[index].toLowerCase();
      box.classList.add("locked");
    });
  }

  function setNewWord() {
    // Pick a word different from current if possible
    let newWord;
    do {
      newWord = pickRandomWord();
    } while (newWord === currentWord && wordBank.length > 1);

    currentWord = newWord;
    wordLocked = false;
    hintRevealed = false;
    renderLetterFields(currentWord);
    setFieldsDisabled(false);
    focusFirstBox();
    letterFields.classList.remove("correct-flash", "wrong-flash");
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    hintText.textContent = "";
    hintText.classList.remove("visible");
    btnCheck.disabled = false;
  }

  function revealCurrentWord() {
    if (wordLocked) {
      return;
    }

    wordsAttempted++;
    wordsAttemptedDisplay.textContent = wordsAttempted;
    streak = 0;
    streakDisplay.textContent = streak;
    wordLocked = true;
    fillLetterFields(currentWord);
    setFieldsDisabled(true);
    btnCheck.disabled = true;
    feedbackEl.textContent = `Answer: ${currentWord}`;
    feedbackEl.className = "feedback wrong";
    hintText.textContent = 'Click "Skip / New Word" to continue.';
    hintText.classList.add("visible");
  }

  // ───────────────────────────
  // CHECK ANSWER
  // ───────────────────────────
  function checkAnswer() {
    if (wordLocked) {
      feedbackEl.textContent =
        '✅ You already got this one! Click "Skip" for a new word.';
      feedbackEl.className = "feedback correct";
      return;
    }

    const rawAnswer = getRawAnswer();
    const userAnswer = normalizeAnswer(rawAnswer);
    const correctAnswer = normalizeAnswer(currentWord);

    if (!hasTypedLetter()) {
      feedbackEl.textContent = "⚠️ Please type something first!";
      feedbackEl.className = "feedback wrong";
      flashFields("wrong-flash", 500);
      focusFirstBox();
      return;
    }

    wordsAttempted++;
    wordsAttemptedDisplay.textContent = wordsAttempted;

    if (userAnswer === correctAnswer) {
      // CORRECT!
      score++;
      streak++;
      wordLocked = true;
      scoreDisplay.textContent = score;
      streakDisplay.textContent = streak;
      feedbackEl.textContent = "🎉 Correct! Well done!";
      feedbackEl.className = "feedback correct";
      fillLetterFields(currentWord);
      flashFields("correct-flash", 600);
      hintText.textContent = "";
      hintText.classList.remove("visible");
      btnCheck.disabled = true;
      setFieldsDisabled(true);
      // Auto-advance after 1.5 seconds
      setTimeout(() => {
        if (wordLocked && normalizeAnswer(currentWord) === correctAnswer) {
          setNewWord();
          updateDisplay();
          // Auto-speak the new word
          speakWord(currentWord);
        }
      }, 1500);
    } else {
      // WRONG
      streak = 0;
      streakDisplay.textContent = streak;
      feedbackEl.textContent = "❌ Not quite right. Try again!";
      feedbackEl.className = "feedback wrong";
      flashFields("wrong-flash", 500);

      // Reveal hint after first wrong attempt
      if (!hintRevealed) {
        hintRevealed = true;
        const firstLetter = currentWord.charAt(0).toUpperCase();
        const lengthHint = "_ ".repeat(currentWord.length - 1);
        hintText.textContent = `💡 Hint: Starts with "${firstLetter}" — ${currentWord.length} letters: ${firstLetter} ${lengthHint}`;
        hintText.classList.add("visible");
      }

      // Keep only letters that are in the correct place.
      keepCorrectLettersOnly(rawAnswer, currentWord);
    }
  }

  function updateDisplay() {
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;
    wordsAttemptedDisplay.textContent = wordsAttempted;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    hintText.textContent = "";
    hintText.classList.remove("visible");
    letterFields.classList.remove("correct-flash", "wrong-flash");
    btnCheck.disabled = false;
    setFieldsDisabled(false);
  }

  // ───────────────────────────
  // EVENT LISTENERS
  // ───────────────────────────
  btnSpeak.addEventListener("click", async () => {
    if (isSpeaking) {
      stopCurrentAudio();
      await new Promise((r) => setTimeout(r, 100));
    }
    speakWord(currentWord);
  });

  btnCheck.addEventListener("click", checkAnswer);
  btnGiveUp.addEventListener("click", revealCurrentWord);

  speedRange.addEventListener("input", () => {
    setSpeechRate(speedRange.value);
  });

  letterFields.addEventListener("input", (e) => {
    const box = e.target.closest(".letter-box");
    if (!box) {
      return;
    }

    const typedValue = box.value.replace(/[^a-z0-9]/gi, "");
    box.value = typedValue.slice(-1).toLowerCase();
    box.classList.remove("locked");

    if (box.value) {
      focusNextBox(box);
    }
  });

  letterFields.addEventListener("paste", (e) => {
    const box = e.target.closest(".letter-box");
    if (!box) {
      return;
    }

    e.preventDefault();
    const pastedText = (e.clipboardData || window.clipboardData)
      .getData("text")
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase();
    if (!pastedText) {
      return;
    }

    const boxes = getLetterBoxes();
    let boxIndex = boxes.indexOf(box);
    for (const char of pastedText) {
      while (boxes[boxIndex] && boxes[boxIndex].disabled) {
        boxIndex++;
      }
      if (!boxes[boxIndex]) {
        break;
      }
      boxes[boxIndex].value = char;
      boxes[boxIndex].classList.remove("locked");
      boxIndex++;
    }

    const nextBox = boxes.slice(boxIndex).find((item) => !item.disabled);
    if (nextBox) {
      nextBox.focus();
      nextBox.select();
    }
  });

  letterFields.addEventListener("keydown", (e) => {
    const box = e.target.closest(".letter-box");
    if (!box) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      checkAnswer();
      return;
    }

    if (e.key === "Backspace" && !box.value) {
      e.preventDefault();
      focusPreviousBox(box);
      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusPreviousBox(box);
      return;
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusNextBox(box);
    }
  });

  btnSkip.addEventListener("click", () => {
    if (isSpeaking) {
      stopCurrentAudio();
    }
    setNewWord();
    updateDisplay();
    // Auto-speak after short delay
    setTimeout(() => speakWord(currentWord), 300);
  });

  // ───────────────────────────
  // INITIALIZE
  // ───────────────────────────
  function init() {
    setSpeechRate(speedRange.value);
    setNewWord();
    updateDisplay();
    // Auto-speak the first word after a short delay
    setTimeout(() => {
      speakWord(currentWord);
    }, 600);
    focusFirstBox();
  }

  // Handle page unload – cancel any ongoing speech
  window.addEventListener("beforeunload", () => {
    stopCurrentAudio();
  });

  // Handle visibility change – pause speech if tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && isSpeaking) {
      stopCurrentAudio();
    }
  });

  // Start the game
  init();

  console.log(
    "🎧 Spelling Bee ready! Listen to the word and spell it correctly.",
  );
  console.log("📋 Word bank size:", wordBank.length, "words");
  console.log("💡 Tip: Press Enter after typing to check your answer quickly.");
})();
