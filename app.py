import gradio as gr
import os


def predict(text):
    return f"Hola {text}"


demo = gr.Interface(fn=predict, inputs="text", outputs="text")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))
    demo.launch(server_name="0.0.0.0", server_port=port)
