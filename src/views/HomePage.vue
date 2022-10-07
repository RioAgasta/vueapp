<template>
    <div class="container">
        <div class="col">
            <form class="bs-component">
                <div class="form-group">
                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">
                        Small Input
                    </label>
                    <input
                        class="form-control form-control-md"
                        type="text"
                        placeholder=".form-control-sm"
                        id="inputSmall"
                    />
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Input Addons</label>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Recipient's Username"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <!-- <button class="btn btn-primary" type="button">
                            Button
                        </button> -->
                    </div>
                    <button class="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>