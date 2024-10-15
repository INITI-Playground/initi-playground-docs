Title:   Adding interactive objects
Summary: How to use pre-made scripts to add basic interactivity
Authors: Ondrej Prucha
Date:    August 5, 2024
blank-value:


# Adding interactive objects

Now that your project is set up and you've tested the touch functionality, it’s time to bring your scene to life by adding interactive objects. To help you get started quickly, the **INITI Playground SDK** includes several pre-made behaviour and utility scripts that you can easily attach to `GameObjects` to make them interactive.

These scripts are designed to handle common interactions, such as triggering effects, with minimal setup required. By simply adding these scripts to your `GameObjects`, you can create engaging, interactive experiences without having to write custom code from scratch.

Here’s a basic guide on how to use these pre-made scripts. In the following chapter, we’ll explore each available script in detail.

- **Select a GameObject:** In the Unity Editor, choose the `GameObject` you want to make interactive.
- **Add a Collider:** To make the object interactive, it must have a physics collider. The **INITI Playground SDK** supports both 2D and 3D colliders, so select the collider type that best matches the shape of your object and attach it. If necessary, you can also add multiple colliders to the object.
- **Add a Behavior Script:** With the `GameObject` selected, click the "Add Component" button, and choose the script you want to use. The behavior scripts can be found under the path **Initi > Behaviour**.
- **Configure the Script:** After attaching the script, you can customize its properties in the **Inspector** to fit your needs. Each script has different settings, so we’ll explore the specifics of each one in the next chapter.
- **Test Interactivity**: Enter Play mode and interact with the `GameObject` to see the script in action. If needed, tweak the script settings to achieve the desired behavior.

These pre-made scripts are a great way to quickly prototype and build interactive elements, allowing you to focus on creating unique content for your INITI Playground project. Now that you're familiar with how to use the pre-made scripts, let's take a closer look at each one.

----


<div class="center" markdown>
[Pre-made behaviour scripts](behaviour-scripts.md){ .md-button }
</div>

<br />