import { useState, useEffect, useRef } from 'react'
import useInterval from '@use-it/interval'
import styles from '../../styles/Snake.module.css'

type Apple = {
  x: number
  y: number
}

type Velocity = {
  dx: number
  dy: number
}

export default function SnakeGame() {
  // Canvas Settings
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasWidth = canvasRef.current?.offsetWidth
  const canvasHeight = canvasRef.current?.offsetHeight
  const canvasGridSize = 20

  // Game Settings
  const minGameSpeed = 1
  const maxGameSpeed = 7

  // Game State
  const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed)
  const [countDown, setCountDown] = useState<number>(4)
  const [running, setRunning] = useState(false)
  const [scenaryAnim, setScenaryAnim] = useState(false)
  const [terminalText, setTerminalText] = useState('root@root: >  node snake.js_')
  const [word, SetWord] = useState([
    'ÉTICA',
    'IMPACTO',
    'RESILIÊNCIA', 
    'PROTAGONISMO', 
  ])
  const [charIndex, setCharIndex] = useState([0,0])
  const [endGameText, setEndGameText] = useState('')
  const [endGameTextIndex, setEndGameTextIndex] = useState(0)

  const [isLost, setIsLost] = useState(false)
  const [highscore, setHighscore] = useState(0)
  const [newHighscore, setNewHighscore] = useState(false)
  const [score, setScore] = useState(0)
  const [snake, setSnake] = useState<{
    head: { x: number; y: number }
    trail: Array<any>
  }>({
    head: { x: 12, y: 9 },
    trail: [],
  })
  const [apple, setApple] = useState<Apple>({ x: -1, y: -1 })
  const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 })
  const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
    dx: 0,
    dy: 0,
  })

  const clearCanvas = (ctx: CanvasRenderingContext2D) =>
    ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2)

  const generateApplePosition = (): Apple => {

    //Change char
    try {
      var maxIndex : number = word[charIndex[0]]?word[charIndex[0]].length -1:0 
      
    } catch (error) {
      var maxIndex : number = 0
    }

    if (charIndex[1] < maxIndex && running){
      setCharIndex( [charIndex[0], charIndex[1] +1] )
    }
    else if(running){
      setCharIndex( [charIndex[0] + 1, 0] )
    }

    const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize))
    const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize))
    // Check if random position interferes with snake head or trail
    if (
      (snake.head.x === x && snake.head.y === y) ||
      snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
    ) {
      return generateApplePosition()
    }
    return { x, y }
  }

  // Initialise state and start countdown
  const startGame = () => {

    if (running) return;

    setGameDelay(1000 / (minGameSpeed+5))
    setIsLost(false)
    setScore(0)
    setSnake({
      head: { x: 12, y: 9 },
      trail: [],
    })
    setApple(generateApplePosition())
    setVelocity({ dx: 0, dy: -1 })
    setRunning(true)
    setNewHighscore(false)
    setCountDown(3)
  }

  // Reset state and check for highscore
  const gameOver = () => {
    if (score > highscore) {
      setHighscore(score)
      localStorage.setItem('highscore', score.toString())
      setNewHighscore(true)
    }
    setIsLost(true)
    setRunning(false)
    setVelocity({ dx: 0, dy: 0 })
    setCountDown(4)
  }

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h)
  }

  const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x + 0.5, y + 0.5, w, h)
  }

  const fillText = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    text: string
  ) => {

    ctx.fillText(text, x, y)
  }

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = 'black'

    fillRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    )

    strokeRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    )

    snake.trail.forEach((snakePart) => {

      fillRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )

      strokeRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
      
    })
  }

  const drawApple = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#DC3030' // '#38C172' // '#F4CA64'
    ctx.strokeStyle = '#881A1B' // '#187741' // '#8C6D1F

    if (
      apple &&
      typeof apple.x !== 'undefined' &&
      typeof apple.y !== 'undefined'
    ) {

      fillRect (
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )

      strokeRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )

      ctx.fillStyle = '#fff'
      ctx.strokeStyle = 'white'

      ctx.textBaseline = 'top';
      ctx.font = "20px Arial";

      fillText(
        ctx,
        apple.x * canvasGridSize +2.5,
        apple.y * canvasGridSize +2.5,
        word[charIndex[0]]?word[charIndex[0]][charIndex[1]]: ''
      )
    }
  }

  // Update snake.head, snake.trail and apple positions. Check for collisions.
  const updateSnake = () => {
    // Check for collision with walls
    const nextHeadPosition = {
      x: snake.head.x + velocity.dx,
      y: snake.head.y + velocity.dy,
    }
    if (
      nextHeadPosition.x < 0 ||
      nextHeadPosition.y < 0 ||
      nextHeadPosition.x >= canvasWidth / canvasGridSize ||
      nextHeadPosition.y >= canvasHeight / canvasGridSize
    ) {
      gameOver()
    }

    // Check for collision with apple
    if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
      setScore((prevScore) => prevScore + 1)
      setApple(generateApplePosition())
    }

    const updatedSnakeTrail = [...snake.trail, { ...snake.head }]
    // Remove trail history beyond snake trail length (score + 2)
    while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift()
    // Check for snake colliding with itsself
    if (
      updatedSnakeTrail.some(
        (snakePart) =>
          snakePart.x === nextHeadPosition.x &&
          snakePart.y === nextHeadPosition.y
      )
    )
      gameOver()

    // Update state
    setPreviousVelocity({ ...velocity })
    setSnake({
      head: { ...nextHeadPosition },
      trail: [...updatedSnakeTrail],
    })

  }

  const endGame = () => {

    setGameDelay(150000)


    var text = 'Parabéns!! 🎉🎉\n Agora faça como a cobrinha \n e se alimente de boas ideias'

    if (endGameTextIndex == text.length +1){
      setTimeout(() => {

        setEndGameText('')

        setGameDelay(1000/12)
        
      }, 10000)
      
    }
    else{
      setEndGameText(`${text.substring(0, endGameTextIndex)}${scenaryAnim?'_':' '}`)
      setEndGameTextIndex(endGameTextIndex +1)
    }
  }

  // Game Hook
  useEffect(() => {
    const canvas = canvasRef?.current
    const ctx = canvas?.getContext('2d')

    if (ctx && !isLost) {
      clearCanvas(ctx)
      drawApple(ctx)
      drawSnake(ctx)
    }
  }, [snake])

  // Game Update Interval
  useInterval( () => {

      if (!isLost) {
        updateSnake()
      }
      

    },
    running && countDown === 0 ? gameDelay : null
  )

  useInterval( () => {
    var text_log = `\nrunning...`
    if (running){
      text_log = `\nrunning... ` + countDown
    }
    else if(isLost) {
      text_log = `\nrunning... \nYou Lose!`
    }
    else {
      text_log = `\nrunning... \nEncontre as 4 palavras para as bolinhas!`
    }

    if(scenaryAnim) {
      setTerminalText('root@root: >  node snake.js_' + text_log);
    }
    else {
      setTerminalText(`root@root: >  node snake.js` + text_log);
    }

    setScenaryAnim(!scenaryAnim)
  }, 700)

  useInterval (
    () => {
      if (charIndex[0] > word.length-1 ){
        endGame()
      }

    }, 100
  )
  // Countdown Interval
  useInterval(
    () => {
      setCountDown((prevCountDown) => prevCountDown - 1)
    },
    countDown > 0 && countDown < 4 ? 800 : null
  )

  // DidMount Hook for Highscore
  useEffect(() => {
    setHighscore(
      localStorage.getItem('highscore')
        ? parseInt(localStorage.getItem('highscore')!)
        : 0
    )
  }, [])

  // Score Hook: increase game speed starting at 16
  useEffect(() => {
    if (score >= minGameSpeed && score <= maxGameSpeed) {
    }
    var i: number = 0
    for (i; i < word.length; i++){
      if(score > i*word.length){
        setGameDelay(1000 / ( 7 + word.length ))
      }
    }

  }, [score])

  // Event Listener: Key Presses
  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'w',
          'a',
          's',
          'd',
        ].includes(e.key)
      ) {
        let velocity = { dx: 0, dy: 0 }

        switch (e.key) {
          case 'ArrowRight':
            velocity = { dx: 1, dy: 0 }
            break
          case 'ArrowLeft':
            velocity = { dx: -1, dy: 0 }
            break
          case 'ArrowDown':
            velocity = { dx: 0, dy: 1 }
            break
          case 'ArrowUp':
            velocity = { dx: 0, dy: -1 }
            break
          case 'd':
            velocity = { dx: 1, dy: 0 }
            break
          case 'a':
            velocity = { dx: -1, dy: 0 }
            break
          case 's':
            velocity = { dx: 0, dy: 1 }
            break
          case 'w':
            velocity = { dx: 0, dy: -1 }
            break
          default:
            console.error('Error with handleKeyDown')
        }
        if (
          !(
            previousVelocity.dx + velocity.dx === 0 &&
            previousVelocity.dy + velocity.dy === 0
          )
        ) {
          setVelocity(velocity)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousVelocity])

  return (
    <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#272529'
      }}>
      
      <div id='game_view' style={{
        position: 'absolute',
        width: '70%', 
        height: '70%',
      }}>

        <div id='background_terminal' style={{top: '5%', right: '5%'}} className={styles.game}>
          <div className={styles.game_title_bar}>
            <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="6.09246" cy="6.40286" rx="5.69537" ry="5.58451" fill="#EF0100"/>
              <ellipse cx="25.4565" cy="6.40286" rx="5.69537" ry="5.58451" fill="#DA226F"/>
              <ellipse cx="44.8209" cy="6.40286" rx="5.69537" ry="5.58451" fill="#541494"/>
            </svg>

            <div>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_73_85)">
                <path d="M11.8172 3.81827H16.353C16.6696 3.81824 16.9827 3.88291 17.2724 4.00814C17.562 4.13337 17.8219 4.31643 18.0354 4.54562C18.2489 4.77482 18.4113 5.04514 18.5123 5.33932C18.6133 5.6335 18.6507 5.9451 18.6221 6.25424L17.8965 14.0725C17.845 14.6275 17.5839 15.1437 17.1643 15.5196C16.7447 15.8954 16.1969 16.104 15.6286 16.1042H3.8403C3.27195 16.104 2.7242 15.8954 2.3046 15.5196C1.88499 15.1437 1.62384 14.6275 1.5724 14.0725L0.846815 6.25424C0.798275 5.73687 0.936112 5.21917 1.23638 4.7911L1.19195 3.81827C1.19195 3.22583 1.43197 2.65766 1.85921 2.23874C2.28644 1.81982 2.8659 1.58447 3.4701 1.58447H7.65278C8.25693 1.5846 8.83629 1.82003 9.26343 2.23898L10.2066 3.16377C10.6337 3.58272 11.2131 3.81815 11.8172 3.81827V3.81827ZM2.33786 3.9523C2.58162 3.86518 2.84361 3.81827 3.11699 3.81827H9.26343L8.4581 3.02863C8.24454 2.81915 7.95485 2.70144 7.65278 2.70137H3.4701C3.17171 2.70132 2.88522 2.81608 2.67221 3.02097C2.4592 3.22586 2.3367 3.50453 2.33103 3.79705L2.33786 3.9523V3.9523Z" fill="#2A84B2"/>
                </g>
                <defs>
                <clipPath id="clip0_73_85">
                <rect width="18.2252" height="17.8704" fill="white" transform="translate(0.622437 0.467773)"/>
                </clipPath>
                </defs>
              </svg>
              snake.js
            </div>
          
          </div>
          <div className={styles.game_terminal_text}> 
            <span style={{whiteSpace: "pre-line"}}>{'root@root: >  node snake.js_'}</span> 
          </div>
        </div>

        <div id='game' className={styles.game}>

          <canvas
            id='scenary'
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
          /> 

          <div className={styles.game_title_bar}>
            <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="6.09246" cy="6.40286" rx="5.69537" ry="5.58451" fill="#EF0100"/>
              <ellipse cx="25.4565" cy="6.40286" rx="5.69537" ry="5.58451" fill="#DA226F"/>
              <ellipse cx="44.8209" cy="6.40286" rx="5.69537" ry="5.58451" fill="#541494"/>
            </svg>

            <div>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_73_85)">
                <path d="M11.8172 3.81827H16.353C16.6696 3.81824 16.9827 3.88291 17.2724 4.00814C17.562 4.13337 17.8219 4.31643 18.0354 4.54562C18.2489 4.77482 18.4113 5.04514 18.5123 5.33932C18.6133 5.6335 18.6507 5.9451 18.6221 6.25424L17.8965 14.0725C17.845 14.6275 17.5839 15.1437 17.1643 15.5196C16.7447 15.8954 16.1969 16.104 15.6286 16.1042H3.8403C3.27195 16.104 2.7242 15.8954 2.3046 15.5196C1.88499 15.1437 1.62384 14.6275 1.5724 14.0725L0.846815 6.25424C0.798275 5.73687 0.936112 5.21917 1.23638 4.7911L1.19195 3.81827C1.19195 3.22583 1.43197 2.65766 1.85921 2.23874C2.28644 1.81982 2.8659 1.58447 3.4701 1.58447H7.65278C8.25693 1.5846 8.83629 1.82003 9.26343 2.23898L10.2066 3.16377C10.6337 3.58272 11.2131 3.81815 11.8172 3.81827V3.81827ZM2.33786 3.9523C2.58162 3.86518 2.84361 3.81827 3.11699 3.81827H9.26343L8.4581 3.02863C8.24454 2.81915 7.95485 2.70144 7.65278 2.70137H3.4701C3.17171 2.70132 2.88522 2.81608 2.67221 3.02097C2.4592 3.22586 2.3367 3.50453 2.33103 3.79705L2.33786 3.9523V3.9523Z" fill="#2A84B2"/>
                </g>
                <defs>
                <clipPath id="clip0_73_85">
                <rect width="18.2252" height="17.8704" fill="white" transform="translate(0.622437 0.467773)"/>
                </clipPath>
                </defs>
              </svg>
              snake.js
            </div>
          
          </div>
          <div className={styles.game_terminal_text}> 
            <span style={{whiteSpace: "pre-line"}}>{terminalText}</span> 
          </div>
          <div className={styles.game_word}> 
            <span style={{whiteSpace: "pre-line"}}>{word[charIndex[0]]?.substring(0, charIndex[1]) }</span> 
          </div>

          <div className={styles.game_word_list}> 
            <span style={{whiteSpace: "pre-line", color: '#FF4645'}}>⬤{word.slice(0 , charIndex[0] > 0? 1: 0)}</span> 
            <span style={{whiteSpace: "pre-line", color: '#7E62D8'}}>⬤{word.slice(1 , charIndex[0] > 1? 2: 0)}</span> 
            <span style={{whiteSpace: "pre-line", color: '#4321A4'}}>⬤{word.slice(2 ,  charIndex[0] > 2? 3: 0)}</span> 
            <span style={{whiteSpace: "pre-line", color: '#EF8753'}}>⬤{word.slice(3 , charIndex[0] > 3? 4: 0)}</span> 
          </div>



          <div onMouseMove={(e) => {
              startGame()
            }} 
            
            className={styles.game_score}>
            <p>
              Score: {score}
            </p>
            <p>
              Highscore: {highscore > score ? highscore : score}
            </p>

          </div>

       
          <div className={styles.game_end}>
            <span> {endGameText}</span>
          </div>

      
          {isLost && (
            <div className={styles.game_control}>

              <p className="large">Game Over</p>

              {!running && isLost && (
                <button  onClick={startGame}>
                  {countDown === 4 ? 'Restart Game' : countDown}
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
