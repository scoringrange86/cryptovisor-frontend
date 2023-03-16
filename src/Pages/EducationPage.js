import './EducationPage.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

// const getCourses = async (request, response) => { 
//     // fetch('http://localhost:5000/api/courses')
//     // .then(response =>
//     // {
//     //     // console.log(response.json())
//     //      return  response.json()
//     // })
//     // .then( (data) => {
//     //     // console.log(data)
//     //     //  setCourses(data);
//     //     response.send(data)
//     // })
//     // .catch(error => console.log(error))

//     try{
//         const d = await fetch('http://localhost:5000/api/courses')
//         const jsonData = await d.json()
//         console.log(jsonData)
//         response.send(jsonData)
//     }catch(error){
//         console.error(error);
//         // response.status(500).json({message: "Server Error"});
//     }
// }

function orderArticles (array) {
    const orderedArray = []
    var position = 1; 
    array.forEach(element => {
        const article = array.find(element => element.order === position)
        orderedArray.push(article)
        position++; 
    });
    return orderedArray
}

const EducationPage = () => {
    const [courses, setCourses] = useState( [
         {title: "Getting Started",
            courseContent: {
                article: "#### Static   When you look at the big picture of, What is Cryptocurrency, it can be quite daunting. But Cryptocurrency, like other currencies, has many functions and varying use cases. Such as being a store of value, being used in exchanged for goods and services, and much much more. In this article we will seek to explain what makes cryptocurrency stand out and above the rest of the digital assets by answering questions like: What is Cryptocurrency? What is cryptography? Why Cryptocurrency? What is Blockchain? How many types of cryptocurrencies are there? What can cryptocurrency be used for? Why we should value cryptocurrency over other digital assets? And more!",
                subtitle: [
                    "### Static   So, What is Cryptocurrency?",
                    "### Static   What is cryptography?",
                    "### Static   What is Blockchain?"
                ],
                subarticle: [
                    "### Static   Cryptocurrency, often referred to as “Crypto” for short, is a new class of digital assets that operate on a Blockchain. The assets that Cryptocurrency represents, includes but is not limited to: currencies that can be used in exchange for goods and services, a store of value like gold, a tool to track inventory, or even a digital representation of any physical asset like an artwork. Cryptocurrencies come in many forms and varying use cases. Contrary to popular belief, Cryptocurrency is not the first digital currency. Rather it is the first digital currency to use a technology called Cryptography, hence the name crypto-currency.  The first cryptocurrency to successful use Cryptography is what we all know today as Bitcoin. Bitcoin pioneered the path for the digital assets referred to as cryptocurrencies. Bitcoin is the most easily recognizable coin and leader in the digital assets class. If you would like to know more about Bitcoin, click here, to visit our detailed summary of what Bitcoin is. Cryptocurrency is often referred to as “Crypto” for short.",
                    "### Static   To some, Cryptography is a new phenomenon but in actuality, it is a reliable technology that dates back many many centuries ago. Cryptography is the method of securing a message and being able to privately share the message without it being debunked. The literal translation of cryptography is encrypted writing. So, one could imagine how long ago messages were written in secrete requiring a legend or ‘key’ to decipher the mismatched letters. Cryptography is a technology that has been adopted and integrated into the digital world to secure the communication of information. Whether that is a message from one entity to another or from one person to the next. Cryptography is the method to securely communicate using mathematical concepts.",
                    "### Static   Another fascinating technology just as revolutionary, if not more revolutionary than the integration of cryptography, is the use of blockchain technology. Blockchain is a ledger or book that is distributed amongst a network of computers which is maintained by miners or validators. The premise of Blockchain technology is to verify every transaction on the network as well as record those transactions. Following the validation and confirmation of a transaction on the network, it is recorded as a block and added to a chain of blocks creating the blockchain. This ledger of blocks is maintained over a large network of computers that cannot be accessed from one single point. Making cryptocurrency almost impossible to hack unless you have access to every single computer on the network at the same time. Considering that every transaction on the blockchain is recorded and publicly shared, one would think that blockchain is not and cannot be anonymous. Which goes against the popular belief that cryptocurrency is untraceable. But cryptocurrency largely is still untraceable to a certain degree. Where cryptocurrency can be considered untraceable is because you do not need a bank account, ID or anything more than an online wallet and internet access to operate an account on the blockchain. The blockchain or network of computers records the encrypted transactions by tracking every transaction on the network through the use of Public Keys. But the payments transacted can only be accessed by using the Private Keys mentioned earlier. If you would like to know more about What Blockchain is, click here, to visit our detailed summary on what blockchain is and how it works."
                ]
            },
            id: 1
        },
          { title: "What is Defi? #Static",
          courseContent: {
            article: "### Static   If cryptocurrency is similar to other currencies, then you might ask, why does the financial system need revolutionizing? What is the benefit of Decentralized Finance versus Centralized Finance? Decentralized finance compared to Centralized finance utilizes cryptocurrency to operate on the blockchain. By moving to a financial system that operates on a blockchain, which as mentioned above is a system of computers that make up a network, you are enabling a more secure and trust less/// seamless movement of funds. Decentralized finance takes out the middle man that the centralized finance system relays on. With the centralized finance system, one has to wait for funds to clear before they are accessible. Where with using the decentralized finance system, one has immediate access to their funds. Where this comes into to play is that one time you are making a purchase outside of your norm, but it actually is you. But you have to wait for the bank to verify and release your funds which can take an unknown amount of time. as long as you have internet access The simple answer is, that cryptocurrency enables liberty and equality. When considering the needs to open an online wallet is only access to the internet Considering one only needs an online wallet and access to the internet to be able to operate on the blockchain, you would not need to be apart of a centralized financial system to access the funds and services that cryptocurrency aims to provide. One would not need to be apart of a financial system that prejudices against what they have or may not have.Rather the system is governed by the validators of the blockchain, which is any computer on the network. //// Cryptocurrency is decentralized so it is not able to be governed by one entity, rather it is governed by the people. More specifically, cryptocurrency is governed by the machines that make up the blockchain. A technology such as blockchain would enable the worlds unbanked population, which is about 1/3 of all people, to have access to the same liberties as everyone else. Such as, investing, borrowing, saving and securing."
        },
          id: 2},
           { title: "Tools #Static",
           courseContent: {
            subtitle: [
                "What is an Online Wallet? ### Static",
                "What is a ledger? ### Static",
                "What is a crypto wallet address? ### Static"
            ],
            subarticle: [
                "### Static    An online wallet is ****What do you need to create an online wallet**** Centralized Wallets where you do not hold the key such as Coinbase Wallet. Decentralized wallets like MetaMask, you must retain the password and private key to access your wallet. Your Bitcoin wallet will allow you to copy your Bitcoin address to your clipboard. Then, you just need to provide the sender with that address via email, messaging app, SMS, etc. Most wallets also provide you with a QR-code version of your Bitcoin address. If you're in the same room as the sender, they can scan your QR code to get your address. 2 keys, public key and private.. everyone knows your public keys. Similar to an email. Then we have a private ket which is kept private unique address that only the user has knowledge of.. something like a password.. you send money to the unique address of your receiver or sender",
                "### Static    A ledger is a system that tracks all of the transactions and balances between participants of a network. This information is shared and encrypted by cryptography making hacking nearly impossible.A record is created in the form of a block , holds the number of bitcoins each member owns. New block is created for each block, each block references the previous blocks, the recording system is called a ledger. There are public ledgers that track every transaction. Each user has a copy of the data - makes hacking hard/impossible. Protected using cryptography.",
                "### Static    A wallet address is similar to an email address, it is a unique co de that is shared publicly so transactions can be sent to this address. Typically it is a string of letters and numbers."
            ]
        },
           id: 3},
            {title: "NFTs #Static",
            courseContent: {
                subtitle: [
                    "#Static What are NFTs?",
                    "#Static Why NFTs?",
                    "#Static How to use NFTs"
                ],
                subarticle: [
                    "### Static  NFT stands for Non-fungible token. An NFT allows you to tokenize an asset. Whether that is music, art or stocks, tokenization is a digital certificate of an asset that lives on the Blockchain.",
                    "### Static   Considering the Blockchain is secure, fast and interoperable. With a tokenized asset, you gain the ability to have the asset secured to the blockchain just as any other piece of data. Being tied to the blockchain gives the NFT the ability to more trustlessly move but also have a digital tag that stays with the asset.",
                    "### Static   NFTs can be used to store an asset on the blockchain, which in turn can be traded on the blockchain. Many people buy and trade NFTs similar to the buying and selling of art. NFTs can also serve as a ticket to a concert, access to a song or the representation of a stock. Tokenized assets on the blockchain have ever expanding use cases."
                ]
            },
            id: 4}, 
            { title: "FAQs #Static",
            courseContent: {
                subtitle: [
                    "### Static  How many types of Cryptocurrencies are there? ",
                    "### Static  What are the use cases of cryptocurrency? ",
                    "### Static  Why should we value cryptocurrency over other digital assets? "
                ],
                subarticle: [
                    "### Static  When scanning the cryptocurrency market, there are nearly 3000+ cryptocurrencies with a new one being created everyday. But within the world of cryptocurrencies, there are two main categories, Coins and Tokens. What are cryptocurrency Coins? Cryptocurrency coins are assets that belong to a native blockchain. Similar to how XRP coin belongs to the XRPL or XRP Ledger. Another example is ETH coin which is native to the Ethereum Blockchain. Cryptocurrency coins are the utility coins of their native blockchain. The coins generally facility transactions and fees for their native blockchains. Cryptocurrency tokens are like coins but they are a token that is issued on top of a native blockchain. For example, DOGE is a token built on the ETH blockchain. DOGE is not the native asset to the Ethereum considering ETH is the native asset. Tokens act like coins but do not carry the same utility as coins. In summary, there can be many different types of cryptocurrencies that can fulfill various needs. ",
                    "### Static   As we’ve been hinting towards, cryptocurrency has many different and varying use cases.  Which also drives the use of many different cryptocurrencies. For example, XRP has a potential use case of facilitating bank transactions similar to SWIFT payment system. Also, XLM’s use case is to facilitate person to person transactions. Other use cases could be the need for blockchain storage which is where coins like STORJ or SC - SiaCoin come into play. There are many different and varying uses for cryptocurrency.",
                    "### Static   Interoperability, scalability and security are the three main reasons as to why cryptocurrency should be valued over other digital currencies. As mentioned above, the integration of cryptography into the blockchain world is extremely revolutionary when it comes to financial security. Cryptography eliminates the ability for financial systems to be hacked and false transactions implemented into the system. Interoperability is one thing that the blockchain and cryptocurrency community are working to integrate. Interoperability is the ability for a coin or token to move across blockchains while remaining secure. If. A coin or token is able to cross blockchains, that means your funds have the ability to work in many different cases. For example, the SOLO Dex is working to tokenize stocks. If this becomes a reality, one will be able to transact in cryptocurrency while also trading on the stock exchange. Scalability. Blockchain is developing itself to be future proof by over designing the networks to handle extreme amounts of transactions. The FLARE network for example is developing itself to be able to compute hundreds of transactions a second, enabling it to scale to whatever the need is. When the cryptocurrency community figures out these three keys topics, there will be nothing to stop the implementation of cryptocurrency technology."
                ]
            },
            id: 5}])

    useEffect( () => {
        fetch('http://localhost:5000/api/courses').then(response =>
        {
             return  response.json()
        })
        .then( (data) => {
             setCourses(orderArticles(data));
        })
        .catch(error => console.log(error))        
    }
    , []
    )
   
    const topRow = courses.filter((courseTitle, index) => index < 3)
    const bottomRow = courses.filter((courseTitle, index) => index >= 3)

    return (
        <div className="courses-wrapper">
            <div className="courses-top-row-wrapper">
                {topRow.map((course) => (
                    <Link className="course-btn" key={course._id} to={
                        {
                            pathname: `/Education/${course.title}`,
                            state: {
                                title: course.title,
                                courseContent: course.courseContent,
                                id: course.id
                            }
                        }
                    }>
                        <div className="course-btn-wrapper">
                            <p>{course.title}</p>
                        </div>
                    </Link>
                )
                )
                }
            </div>
            <div className="courses-bottom-row-wrapper">
                {bottomRow.map((course) => (
                    <Link className="course-btn"  key={course._id} to={
                        {
                            pathname: `/Education/${course.title}`,
                            state: {
                                title: course.title,
                                courseContent: course.courseContent,
                                id: course.id
                            }
                        }
                    }>
                        <div className="course-btn-wrapper">
                            <p>{course.title}</p>
                        </div>
                    </Link>
                )
                )
                }
            </div>
        </div>
    )
}

export default EducationPage