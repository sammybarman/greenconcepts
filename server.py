from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def renderPage():
    return render_template("index.html")

@app.route("/rainwater")
def rainwater():
    return render_template("rainwater.html")

@app.route("/wastewater")
def wastwater():
    return render_template("wastewater.html")

@app.route("/infrastructure")
def infrastructure():
    return render_template("infrastructure.html")

@app.route("/test1")
def test1():
    return render_template("test1.html")

@app.route("/test2")
def test2():
    return render_template("test2.html")

@app.route("/watermanage")
def watermanage():
    return render_template("watermanage.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
