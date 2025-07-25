import React, { useEffect, useState } from "react";

const styles = {
    container: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "black",
        color: "white",
    },
    pageWrapper: {
        minHeight: "200vh", // Make page tall enough to scroll
        backgroundColor: "black",
    },
    stackWrapper: {
        position: "relative",
        backgroundColor: "black",
        scrollbarGutter: "stable",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
    },
    stackInner: {
        paddingTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        position: "relative",
    },
    footballIcon: (visible) => ({
        position: "sticky",
        top: "5vh",
        width: "80px",
        height: "80px",
        backgroundColor: "white",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        transition: "all 0.6s ease-out",
        transform: visible ? "scale(1)" : "scale(0.8)",
        opacity: visible ? 1 : 0,
    }),
    iconImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    stickyBox: (top, backgroundColor, width, zIndex, visible) => ({
        position: "sticky",
        top: `${top}vh`,
        textAlign: "center",
        fontWeight: "bold",
        padding: "1rem",
        width: width,
        fontSize: "2rem",
        backgroundColor,
        color: backgroundColor === "white" ? "black" : "black",
        zIndex,
        transition: "all 0.6s ease-out",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
    }),
    mainText: (visible) => ({
        position: "sticky",
        top: "40vh",
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        zIndex: 40,
        color: "white",
        transition: "all 0.6s ease-out",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
    }),
};

const Stacking = () => {
    const [visibleStates, setVisibleStates] = useState({
        icon: false,
        quote1: false,
        quote2: false,
        quote3: false,
        mainText: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleStates((prev) => {
                    const updated = { ...prev };
                    entries.forEach((entry) => {
                        const name = entry.target.getAttribute("data-id");
                        updated[name] = entry.isIntersecting;
                    });
                    return updated;
                });
            },
            {
                root: null, // viewport scroll
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll("[data-id]");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container} className="scroll-smooth" id="top">
                <div style={styles.stackWrapper}>
                    <div style={styles.stackInner}>
                        {/* Football Icon */}
                        <div style={styles.footballIcon(visibleStates.icon)} data-id="icon">
                            <img
                                src="groupFootbal.svg"
                                alt="Football Icon"
                                style={styles.iconImage}
                            />
                        </div>

                        {/* Quotes */}
                        <div
                            style={styles.stickyBox(18, "#DBFD01", "75%", 10, visibleStates.quote1)}
                            data-id="quote1"
                        >
                            “Wiedziałem!”
                        </div>
                        <div
                            style={styles.stickyBox(20, "white", "85%", 20, visibleStates.quote2)}
                            data-id="quote2"
                        >
                            “A nie mówiłem?”
                        </div>
                        <div
                            style={styles.stickyBox(22, "#DBFD01", "95%", 30, visibleStates.quote3)}
                            data-id="quote3"
                        >
                            “To było oczywiste!”
                        </div>

                        {/* Main Text */}
                        <div style={styles.mainText(visibleStates.mainText)} data-id="mainText">
                            Apka dla futbolowych Ekspertów.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stacking;
